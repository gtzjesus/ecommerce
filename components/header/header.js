import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <a>logo</a>
        </li>
      </ul>
      <ul>
        <li>
          <a>menu</a>
        </li>
      </ul>
    </div>
  );
}
