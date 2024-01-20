import { HTMLProps, ReactNode } from "react";
import styles from "./Card.module.scss";

type Props = {
  children: ReactNode;
} & HTMLProps<HTMLDivElement>;

export default function Card(props: Props) {
  const { children, className, ...others } = props;

  return (
    <div className={`${styles.card} ${className}`} {...others}>
      {children}
    </div>
  );
}
