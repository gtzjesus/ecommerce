'use client';
import { useState, useEffect } from 'react';
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
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <div className={`${styles.header} ${!showHeader ? styles.hidden : ''}`}>
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
