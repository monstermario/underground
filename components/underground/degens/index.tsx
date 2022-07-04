import styles from './Degens.module.scss';
type TypeDegen = {
  img: string;
  title: string;
  description: string;
  priceType: string;
  priceValue: string;
  priceUnit: string;
  supply: number;
  hide: boolean;
};
const degens: TypeDegen[] = [
  {
    img: '/img/degen/stoner.png',
    title: 'Stoner',
    description:
      'Hot box anyone? These guys are commonly found in a deep cloud of haze. Bring munchies and more nugs.',
    priceType: 'Mint price',
    priceValue: 'XX',
    priceUnit: 'SOL',
    supply: 4200,
    hide: false,
  },
  {
    img: '/img/degen/question.svg',
    title: 'Raver',
    description:
      'Raving till the crack of dawn, music fills the underground at night. They think sleep is for the weak',
    priceType: 'Initiation price',
    priceValue: 'XX',
    priceUnit: '$UDG',
    supply: 4200,
    hide: true,
  },
  {
    img: '/img/degen/question.svg',
    title: 'Kingpin',
    description:
      'The heart of operations. Grinding whilst others party. They have all kinds of schemes, just ask them.',
    priceType: 'Initiation price',
    priceValue: 'XX',
    priceUnit: '$UDG',
    supply: 4200,
    hide: true,
  },
];
export const Degens: React.FC = () => (
  <div className={styles.page}>
    <h1>THE DEGENS</h1>
    <div className={styles.list}>
      {degens.map((degen: TypeDegen, index: number) => (
        <div
          className={`${styles.item} ${degen.hide ? styles.hide : ''}`}
          key={`degen-${index}`}
        >
          <img src={degen.img} alt="" />
          <h3>{degen.title}</h3>
          <div className={styles.info}>
            <p>{degen.description}</p>
            <h4>
              {degen.priceType}{' '}
              <span>
                {degen.priceValue} {degen.priceUnit}
              </span>
            </h4>
            <h4>
              Supply <span>{degen.supply}</span>
            </h4>
          </div>
        </div>
      ))}
    </div>
    <p>
      A Collection of 4200 Degens stoners and some bonuses. 2 bespoke 1/1s in each collection. Any of these will give you exclusive access to our holders chat, share of game profits, staking and much more.
    </p>
  </div>
);
