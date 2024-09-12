import Landing from '@/components/landing/landing';
import styles from './page.module.css';
import Header from '@/components/header/header';

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}>
        <main className={styles.main}><Landing /></main>
      </div>
    </>
  );
}
