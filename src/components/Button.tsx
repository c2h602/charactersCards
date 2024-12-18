import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  onClick: () => void;
  className: string;
}

export default function Button({ children, className, onClick }: IButton) {
  return (
    <>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
