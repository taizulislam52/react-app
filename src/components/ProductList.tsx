import { useEffect, useState } from "react";

function ProductList({ category }: { category: string }) {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Products in", category);
    setProducts(["Clothing", "Shirt"]);
  }, [category]);

  return <h1>Product List</h1>;
}
export default ProductList;
