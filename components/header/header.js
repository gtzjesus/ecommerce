import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';
import logo from '../../assets/icons/world.webp';
import search from '../../assets/icons/search.webp';
import account from '../../assets/icons/account.webp';
import bag from '../../assets/icons/bag.webp';
import menu from '../../assets/icons/menu.webp';

export default function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.ul}>
        <Link href="/">
          <Image className={styles.logo} src={logo} alt="ecommerce" priority />
        </Link>
      </ul>
      <ul className={styles.ul}>
        <Link href="/search">
          <Image className={styles.icon} src={search} alt="search" priority />
        </Link>
        <Link href="/account">
          <Image className={styles.icon} src={account} alt="account" priority />
        </Link>
        <Link href="/bag">
          <Image className={styles.icon} src={bag} alt="bag" priority />
        </Link>
        <Link href="/menu">
          <Image className={styles.icon} src={menu} alt="menu" priority />
        </Link>
      </ul>
    </div>
  );
}
