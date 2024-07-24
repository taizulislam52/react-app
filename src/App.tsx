import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers([...res.data]))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="container my-4">
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group my-4">
        {users.map((user) => (
          <li key={user.id} className="list-group-item">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
