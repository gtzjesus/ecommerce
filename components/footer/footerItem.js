'use client';

import styles from './footer.module.css';

function FooterItem({ num, title, currentOpen, onOpen, children }) {
  // Code logic to check which faq number is currently open
  const isOpen = num === currentOpen;

  // Handles opening and closing the modal (toggle)
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <>
      <hr />
      <div className={styles.footerItem} onClick={handleToggle}>
        <h2>{title}</h2>
        <p>{isOpen ? '-' : '+'}</p>
      </div>
      <div className={styles.footerItem}>{isOpen && <p>{children}</p>}</div>
    </>
  );
}

// Export reusable Component
export default FooterItem;
