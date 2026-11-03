import { PropsWithChildren } from "react";
import styles from "./Section.module.css";

interface Props extends PropsWithChildren {
  className?: string;
}

export const Section = ({ children, className }: Props) => {
  return (
    <section className={`${styles.section} ${className}`}>{children}</section>
  );
};
