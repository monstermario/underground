import styles from './Banner.module.scss';

export const Banner: React.FC = () => (
  <div className={styles.page}>
    <div className={styles.content}>
      <div className={styles.info}>
        <h1>
          Welcome to the
          <br />
          underground
        </h1>
        <p>
          Not a brand. Not a Cult. Just a gang of degens.
          <br />
          <br />
          A collective of like minded degens with a simple goal: Enjoy life with
          no worries.
          <br />
          <br />
          It doesn’t matter where you come from. Come as you are and bring the
          vibesss.
          <br />
          <br />
          We’ll keep things short and sweet. Just like our degens
        </p>
      </div>
    </div>
  </div>
);
