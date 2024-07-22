import { useForm, FieldValues } from "react-hook-form";
interface formData {
  name: string;
  age: number;
}
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          id="name"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            The name must be at least 3 charectars long
          </p>
        )}
      </div>
      <div className="form-group mb-3">
        <label className="form-label" htmlFor="age">
          Age
        </label>
        <input
          {...register("age", { required: true, min: 10 })}
          type="number"
          id="age"
          className="form-control"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">The age field is required</p>
        )}
        {errors.age?.type === "min" && (
          <p className="text-danger">The age must be greater or equal 10</p>
        )}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
