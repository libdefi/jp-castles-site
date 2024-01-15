import styles from "./Card.module.scss";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return <div className={styles.card}>{children}</div>;
}
