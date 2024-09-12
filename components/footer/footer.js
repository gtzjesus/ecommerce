'use client';

import FooterItem from './footerItem';
import { useState } from 'react';
import styles from './footer.module.css';

// ------------------------------
// footer
// ------------------------------
// This section contains an array of objects. Our frequently asked questions with the provided answers
const footer = [
  {
    title: 'Resources',
    text: 'Membership',
  },
  {
    title: 'Help',
    text: 'Contact Us',
  },
  {
    title: 'Company',
    text: ' About',
  },
  {
    title: 'Featured',
    text: 'Nike Dunks',
  },
];

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Footer() {
  // React hook useState to control user interaction when clicking on FAQ, displaying and not displaying answers
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <div className={styles.footer}>
      {/* <!-- Map all array to display every FAQ --> */}
      {footer.map((element, index) => (
        <FooterItem
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
          title={element.title}
          num={index}
          key={element.title}
        >
          {element.text}
        </FooterItem>
      ))}
    </div>
  );
}

// Export reusable Component
export default Footer;
