import { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import userService, { User } from "./services/user-service";
import { CanceledError } from "./services/api-client";

type FormData = {
  name: string;
};

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
    setLoading(true);
    const { request, cancel } = userService.getAllUsers();

    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  const onDelete = (id: number) => {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id !== id));

    userService.deleteUser(id).catch((err) => {
      setUsers(originalUsers);
      setError(err.message);
    });
  };

  const onSubmit = (data: FormData) => {
    const originalUsers = [...users];
    const newUser = { id: users.length + 1, ...data };
    setUsers([newUser, ...users]);

    userService
      .createUser(newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
        reset();
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const onUpdate = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + " updated" };
    setUsers(
      users.map((u) =>
        u.id === user.id ? { ...user, name: user.name + " updated" } : u
      )
    );

    userService.updateUser(updatedUser).catch((err) => {
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
            <div>
              <button
                className="btn btn-outline-primary me-2"
                onClick={() => onUpdate(user)}
              >
                Updata
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
