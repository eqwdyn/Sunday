import cl from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export const Button = ({ children, variant = "primary" }: ButtonProps) => {
  return <button className={`${cl.button} ${cl[variant]}`}>{children}</button>;
};
