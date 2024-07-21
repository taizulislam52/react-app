import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

function Alert({ children, onClose }: Props) {
  return (
    <div className="mt-4">
      <div className="alert alert-primary alert-dismissible">
        {children}
        <button
          type="button"
          className="btn btn-close text-right"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default Alert;
