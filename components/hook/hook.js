import Button from '../button/button';
import styles from './hook.module.css';
export default function Hook() {
  return (
    <div className={styles.hook}>
      <h2 className={styles.h2}>Tan Nike Sneakers</h2>
      <h1 className={styles.h1}>Style Your World</h1>
      <p className={styles.p}>
        A lightweight daily designed for every fashionist.
      </p>
      <Button text="Shop" />
    </div>
  );
}
