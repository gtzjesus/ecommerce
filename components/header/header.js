import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

import logo from '../../assets/icons/world.webp';
import search from '../../assets/icons/search.webp';
import account from '../../assets/icons/account.webp';
import bag from '../../assets/icons/bag.webp';
import menu from '../../assets/icons/menu.webp';

const iconLinks = [
  { href: '/search', src: search, alt: 'search', className: styles.icon },
  { href: '/account', src: account, alt: 'account', className: styles.icon },
  { href: '/bag', src: bag, alt: 'bag', className: styles.icon },
  { href: '/menu', src: menu, alt: 'menu', className: styles.icon },
];

export default function Header() {
  return (
    <div className={styles.header}>
      {/* Logo Section */}
      <ul className={styles.ul}>
        <li>
          <Link href="/">
            <Image
              className={styles.logo}
              src={logo}
              alt="ecommerce"
              priority
            />
          </Link>
        </li>
      </ul>

      {/* Icons Section */}
      <ul className={styles.ul}>
        {iconLinks.map(({ href, src, alt, className }) => (
          <li key={href}>
            <Link href={href}>
              <Image className={className} src={src} alt={alt} priority />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
