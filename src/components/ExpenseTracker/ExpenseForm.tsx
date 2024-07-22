import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { categories } from ".";

type FormData = {
  description: string;
  amount: number;
  category: string;
};

const schema: yup.ObjectSchema<FormData> = yup
  .object({
    description: yup.string().required("Description is required").min(3),
    amount: yup
      .number()
      .typeError("Amount is required")
      .required()
      .min(1, "Amount must be greater than or equal to 1"),
    category: yup.string().required("Category is required"),
  })
  .required();

interface Props {
  onSubmit: (expense: FormData) => void;
}

function ExpenseForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
        className="mb-5"
      >
        <div className="form-group mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            type="text"
            id="description"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="number"
            id="amount"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select {...register("category")} className="form-select">
            <option value="">Select category</option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default ExpenseForm;
