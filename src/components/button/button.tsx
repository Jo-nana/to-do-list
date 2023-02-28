import { FC } from 'react';
import './button.scss'

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({className, onClick, children}) => {
  return (
    <button
      type="button"
      className={`${className} btn btn-primary`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
