import { useState } from "react";
import { ExpenseList, ExpenseForm } from "./components/ExpenseTracker";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 100, category: "Groceries" },
    { id: 2, description: "Electricity", amount: 1200, category: "Utilities" },
    { id: 3, description: "Netflix", amount: 200, category: "Entertainment" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="container my-4">
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />

      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
