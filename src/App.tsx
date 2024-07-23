import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("");

  const ref = useRef<HTMLInputElement>(null);

  // call afteRender
  useEffect(() => {
    if (ref.current) ref.current.focus();

    document.title = "React App";
  }, []);

  return (
    <div className="container my-4">
      <input
        ref={ref}
        type="text"
        className="form-control"
        placeholder="Add category"
      />
      <select
        className="form-select my-4"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Category One">Category One</option>
        <option value="Category Two">Category Two</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;
