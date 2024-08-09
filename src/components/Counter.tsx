import { FC, useState } from "react";
import styles from "./Counter.module.scss";

interface CounterProps {
  className?: string;
}

export const Counter: FC<CounterProps> = ({ className }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className={className}>
      <span className={styles.num}>{count}</span>
      <button onClick={increment}>increment</button>
    </div>
  );
};
