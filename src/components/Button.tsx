interface Props {
  color?: string;
  children: string;
  onClick: () => void;
}
function Button({ color = "primary", children, onClick }: Props) {
  const btnClass = `btn btn-${color.toLowerCase()}`;

  return (
    <button type="button" className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
