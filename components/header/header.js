import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';
import logo from '../../assets/icons/world.webp';

export default function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.ul}>
        <Link  href="/">
          <Image className={styles.logo} src={logo} alt="ecommerce" priority />
        </Link>
      </ul>
      <ul className={styles.ul}>
        <li>
          <a>menu</a>
        </li>
        <li>
          <a>menu</a>
        </li>
        <li>
          <a>menu</a>
        </li>
        <li>
          <a>menu</a>
        </li>
      </ul>
    </div>
  );
}
