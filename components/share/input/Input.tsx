import styles from './Input.module.scss';
import { HTMLProps } from 'react';

type Props = {} & HTMLProps<HTMLInputElement>;

export default function Input(props: Props) {
  const { type, className, ...others } = props;

  return (
    <input type={type} className={`${styles.input} ${className}`} {...others} />
  );
}
