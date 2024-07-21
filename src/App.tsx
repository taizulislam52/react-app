import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { cartProductProps } from "./constants";

function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Product 1" },
    { id: 2, title: "Product 2" },
    { id: 3, title: "Product 3" },
  ]);

  const handleRemove = (product: cartProductProps) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  return (
    <div className="container my-4">
      <Navbar cartItemsCount={cartItems.length} />
      <Cart
        onClear={() => setCartItems([])}
        cartItems={cartItems}
        onRemove={handleRemove}
      />
    </div>
  );
}

export default App;
