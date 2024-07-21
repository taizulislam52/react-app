import { FormEvent, useState } from "react";

function Form() {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.currentTarget.value })
          }
          value={person.name}
          type="text"
          id="name"
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="age">
          Age
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: event.currentTarget.value })
          }
          value={person.age}
          type="number"
          id="age"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
