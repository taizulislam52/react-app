import { useState } from "react";
import { ExpenseForm } from "./components/ExpenseTracker";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk", amount: 100, category: "Groceries" },
    { id: 2, description: "Electricity", amount: 1200, category: "Utilities" },
    { id: 3, description: "Netflix", amount: 200, category: "Entertainment" },
  ]);

  return (
    <div className="container my-4">
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
    </div>
  );
}

export default App;
