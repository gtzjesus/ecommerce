'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './landing.module.css';
import landing from '../../assets/backgrounds/landing.webp';
import landingSecond from '../../assets/backgrounds/landingSecond.webp';
import landingThird from '../../assets/backgrounds/landingThird.webp';

const images = [landing, landingSecond, landingThird]; // Array of images

export default function Landing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Change image every 5 seconds (5000 milliseconds)
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.landing}>
      <Image
        className={styles.landingImage}
        src={images[currentImageIndex]}
        alt="landing"
        objectFit="cover" // Adjust based on your needs
      />
    </div>
  );
}
