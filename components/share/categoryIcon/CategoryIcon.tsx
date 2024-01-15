import styles from "./CategoryIcon.module.scss";

type Props = {
  category: string;
};

export default function CategoryIcon(props: Props) {
  return (
    <span key={props.category} className={styles.category}>
      {props.category}
    </span>
  );
}
