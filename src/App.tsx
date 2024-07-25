import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

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
