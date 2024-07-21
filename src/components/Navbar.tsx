interface Props {
  cartItemsCount: number;
}

function Navbar({ cartItemsCount }: Props) {
  return (
    <div className="navbar bg-light px-2 rounded-2 mb-2">
      <span className="navbar-brand">Site name</span>
      <p className="bg-secondary px-2 py-1 text-white rounded-2">
        Cart <span className="badge bg-info">{cartItemsCount}</span>
      </p>
    </div>
  );
}

export default Navbar;
