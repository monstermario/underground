import styles from './Faq.module.scss';
import { FaqItem, TypeFaq } from './faqItem';

export const Faq: React.FC = () => {
  const faqs: TypeFaq[] = [
    {
      title: 'What are the benefits of holding UDG?',
      description:
        'The main benefit for holding is the ability to recieve revenue share from our gaming platform. Additionally tokens earnt through our stake2earn model will provide holders with access to exclusive merch, raffles and DAO proposals & voting.',
    },
    {
      title: 'When is mint?',
      description:
        'Currently, there is no set date for mint, keep updated by joining our Discord or following our Twitter.',
    },
    {
      title: 'What is the long-term goal?',
      description:
        'To create a series of revenue streams through various outlets. Firstly, with our decentralised gambling platform which will focus on using an on-chain identity layer to comply with KYC laws, sanction checks and Fraud / Anti-money laundering protection. To further this, registering for a gambling license will be our main focus.',
    },
    {
      title: 'How can I contact the team?',
      description:
        'Create a support ticket in our discord or DM us through twitter!',
    },
  ];
  return (
    <div className={styles.page}>
      <h1>FAQ</h1>
      <div className={styles.faqs}>
        {faqs.map((faq: TypeFaq, index: number) => (
          <FaqItem num={index + 1} faq={faq} key={`faq-${index}`} />
        ))}
      </div>
    </div>
  );
};
