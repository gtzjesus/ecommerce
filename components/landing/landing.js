import Image from 'next/image';
import styles from './landing.module.css';
import landing from '../../assets/backgrounds/landing.webp'

export default function Landing() {
  return (
    <div className={styles.landing}>
      <Image className={styles.landingImage} src={landing} alt="landing" />
    </div>
  );
}
