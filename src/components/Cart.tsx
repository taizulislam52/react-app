import { cartProductProps } from "../constants";

interface Props {
  cartItems: cartProductProps[];
  onClear: () => void;
  onRemove: (item: cartProductProps) => void;
}
function Cart({ cartItems, onClear, onRemove }: Props) {
  return (
    <>
      <h2>Cart</h2>
      <ul className="list-group my-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between"
          >
            {item.title}
            <button className="btn" onClick={() => onRemove(item)}>
              x
            </button>
          </li>
        ))}
      </ul>
      <button onClick={onClear}>Clear Cart</button>
    </>
  );
}

export default Cart;
