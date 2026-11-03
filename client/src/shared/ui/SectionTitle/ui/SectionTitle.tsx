import styles from './SectionTitle.module.css';

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return <h2 className={styles.title}>{children}</h2>;
};