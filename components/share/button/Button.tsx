import { HTMLProps } from 'react';
import styles from './Button.module.scss';

type Props = {
  outline?: boolean;
} & HTMLProps<HTMLButtonElement>;

export default function Button(props: Props) {
  const { children, className, type, outline, ...others } = props;

  return (
    <button
      type="button"
      className={`${className} ${styles.button} ${outline && styles.outline}`}
      {...others}
    >
      {children}
    </button>
  );
}
