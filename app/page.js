import Landing from '@/components/landing/landing';
import styles from './page.module.css';
import Header from '@/components/header/header';
import Hook from '@/components/hook/hook';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Landing />
        <Hook />
      </main>
    </>
  );
}
