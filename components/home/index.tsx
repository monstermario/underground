import Link from 'next/link';
import styles from './Home.module.scss';

export const Home: React.FC = () => (
  <div className={styles.page}>
    <div className={styles.homeHeader}>
      <Link href="/">
        <a>
        <img src="/img/logo.png" height="69px" alt="" />
        </a>
      </Link>
      <img src="/img/title.png" height="60px" alt="" />
      <div className={styles.border}></div>
    </div>
    <Link href="/underground"> 
      <a className={styles.btn}>
        ENTER THE UNDErGROUND
      </a>
    </Link>
  </div>
);
