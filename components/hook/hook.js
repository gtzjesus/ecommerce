'use client';
import { useState, useEffect } from 'react';
import Button from '../button/button';
import styles from './hook.module.css';
// import { hooksData } from './hooksData'; // Uncomment if using an external file

const hooksData = [
  {
    title: 'Tan Nike Sneakers',
    heading: 'Style Your World',
    description: 'A lightweight daily designed for every fashionist.',
    buttonText: 'Shop',
  },
  {
    title: 'Nike Air Sweater',
    heading: 'Comfy With Fashion',
    description: 'Exclusive orange design.',
    buttonText: 'Browse',
  },
  {
    title: 'Reded Out',
    heading: 'Stand Out',
    description: 'Reded-out and stylish sneakers for any occasion.',
    buttonText: 'Explore',
  },
];

export default function Hook() {
  const [currentHookIndex, setCurrentHookIndex] = useState(0);

  useEffect(() => {
    // Change hook every 5 seconds (5000 milliseconds)
    const intervalId = setInterval(() => {
      setCurrentHookIndex((prevIndex) => (prevIndex + 1) % hooksData.length);
    }, 15000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const { title, heading, description, buttonText } =
    hooksData[currentHookIndex];

  return (
    <div className={styles.hook}>
      <h2 className={styles.h2}>{title}</h2>
      <br />
      <h1 className={styles.h1}>{heading}</h1>
      <br />
      <p className={styles.p}>{description}</p>
      <br />
      <br />
      <Button text={buttonText} />
    </div>
  );
}
