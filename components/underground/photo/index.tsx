import styles from './Photo.module.scss';

export const Photo: React.FC = () => (
  <div className={styles.page}>
    <img src="/img/bgPhoto.jpg" width="100%" />
    <div className={styles.content} />
  </div>
);
