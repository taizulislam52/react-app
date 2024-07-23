import { categories } from ".";

interface Props {
  onSelectCategory: (category: string) => void;
}

function ExpenseFilter({ onSelectCategory }: Props) {
  return (
    <div className="mb-3">
      <select
        onChange={(event) => onSelectCategory(event.target.value)}
        className="form-select"
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ExpenseFilter;
