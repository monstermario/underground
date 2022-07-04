import { useState } from 'react';
import { IconDown } from '../../ui/icon';
import styles from './Faq.module.scss';

export type TypeFaq = {
  title: string;
  description: string;
};
type PageProps = {
  num: number;
  faq: TypeFaq;
};
export const FaqItem: React.FC<PageProps> = ({ num, faq }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className={styles.item}>
      <div className={`${styles.dropdown} ${show ? styles.show : ''}`}>
        <div
          className={styles.title}
          onClick={() => {
            setShow(!show);
          }}
          >
          <span>{num}</span>
          {faq.title}
          <IconDown />
        </div>
        <p className={show ? styles.open : ''}>{faq.description}</p>
      </div>
    </div>
  );
};
