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
      {/* <!-- Main Container with state dynamic class names --> */}
      <div className={styles.footerItem}>
        <div className={`${isOpen ? 'open' : ''}`} onClick={handleToggle}>
          <h2 className="number">{num < 9 ? `0${num + 1}` : num + 1}</h2>
          <h2>{title}</h2>
          <p>{isOpen ? '-' : '+'}</p>
          {isOpen && <p>{children}</p>}
        </div>
      </div>
      <hr />
    </>
  );
}

// Export reusable Component
export default FooterItem;
