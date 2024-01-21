import { HTMLProps } from 'react';
import styles from './Button.module.scss';

type Props = {
  outline?: boolean;
  danger?: boolean;
} & HTMLProps<HTMLButtonElement>;

export default function Button(props: Props) {
  const { children, className, type, outline, danger, ...others } = props;

  return (
    <button
      type="button"
      className={`
        ${className}
        ${styles.button}
        ${outline && styles.outline}
        ${danger && styles.danger}
      `}
      {...others}
    >
      {children}
    </button>
  );
}
