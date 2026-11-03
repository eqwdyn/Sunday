import cl from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export const Button = ({
  children,
  className,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button className={`${cl.button} ${cl[variant]} ${className}`}>
      {children}
    </button>
  );
};
