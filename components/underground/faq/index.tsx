import styles from './Faq.module.scss';
import { FaqItem, TypeFaq } from './faqItem';

export const Faq: React.FC = () => {
  const faqs: TypeFaq[] = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique odio egestas amet diam ridiculus sed. Fermentum velit elit ac suspendisse ut sagittis, rhoncus feugiat. Rhoncus sit nisl dignissim eu nibh. Et neque nec ut aliquam.',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique odio egestas amet diam ridiculus sed. Fermentum velit elit ac suspendisse ut sagittis, rhoncus feugiat. Rhoncus sit nisl dignissim eu nibh. Et neque nec ut aliquam.',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique odio egestas amet diam ridiculus sed. Fermentum velit elit ac suspendisse ut sagittis, rhoncus feugiat. Rhoncus sit nisl dignissim eu nibh. Et neque nec ut aliquam.',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique odio egestas amet diam ridiculus sed. Fermentum velit elit ac suspendisse ut sagittis, rhoncus feugiat. Rhoncus sit nisl dignissim eu nibh. Et neque nec ut aliquam.',
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique odio egestas amet diam ridiculus sed. Fermentum velit elit ac suspendisse ut sagittis, rhoncus feugiat. Rhoncus sit nisl dignissim eu nibh. Et neque nec ut aliquam.',
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
