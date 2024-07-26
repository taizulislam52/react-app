import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FieldValues } from "react-hook-form";

type FormData = {
  name: string;
};
interface User {
  id: number;
  name: string;
}

const schema: yup.ObjectSchema<FormData> = yup.object({
  name: yup.string().required("Name is required"),
});

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const onDelete = (id: number) => {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id !== id));

    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .catch((err) => {
        setUsers(originalUsers);
        setError(err.message);
      });
  };

  const onSubmit = (data: FormData) => {
    const originalUsers = [...users];
    const newUser = { id: users.length + 1, ...data };
    setUsers([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users/", newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
        reset();
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <div className="container my-4">
      {error && <p className="text-danger">{error}</p>}
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <form
        className="row g-3 justify-content-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-sm-10">
          <label className="visually-hidden" htmlFor="name">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="col-sm-2">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
      <ul className="list-group my-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => onDelete(user.id)}
            >
              {" "}
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
