import { PropsWithChildren } from "react";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps extends PropsWithChildren {
  className?: string;
}

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return <h2 className={`${styles.title} ${className}`}>{children}</h2>;
};
