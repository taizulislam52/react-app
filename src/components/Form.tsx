import { useForm, FieldValues } from "react-hook-form";
interface formData {
  name: string;
  age: number;
}
function Form() {
  const { register, handleSubmit } = useForm<formData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          {...register("name")}
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
          {...register("age")}
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
