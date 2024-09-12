import Landing from '@/components/landing/landing';
import styles from './page.module.css';
import Header from '@/components/header/header';
import Hook from '@/components/hook/hook';
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Landing />
        <Hook />
        <Footer />
      </main>
    </>
  );
}
