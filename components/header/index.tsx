import { useState } from 'react';
import Link from 'next/link';
import { DISCORD_URL, TWITTER_URL } from '../../constant';
import { IconDiscord, IconTwitter } from '../ui/icon';
import styles from './Header.module.scss';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { getShortenAddress } from '../../utils';

type PageProps = {
  isGame?: boolean;
}

export const Header: React.FC<PageProps> = ({ isGame }) => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [balance, setBalance] = useState<number>(0);
  
  const getBalance = async () => {
    if (publicKey) {
      try {
        const val = (await connection.getBalance(publicKey))
        setBalance(val / LAMPORTS_PER_SOL);
      } catch (err) {
        console.log('get balance: ', err);
      }
    } else {
      console.log('no publicKey')
    }
  }
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div
          className={`${styles.hamburger} ${openMenu ? styles.open : ''}`}
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {openMenu && (<>
          <div className={styles.blank} />
          <div className={styles.hamburgerBox}>
            <Link href="/mint">Mint</Link>
            <Link href="/games">Games</Link>
            <Link href="/staking">Staking</Link>
            <Link href="/initations">Initations</Link>
            <Link href="/raffles">Raffles</Link>
          </div>
          </>
        )}
        <Link href="/">
          <a>
          <img src="/img/logo.png" height="69px" alt="" />
          <img
            src={isGame ? "/img/titleGame.png" : "/img/title.png"}
            className={styles.title}
            height="60px"
            alt=""
          />
          </a>
        </Link>
        <div className={styles.links}>
          <Link href="/mint">Mint</Link>
          <span>/</span>
          <Link href="/games">Games</Link>
          <span>/</span>
          <Link href="/staking">Staking</Link>
          <span>/</span>
          <Link href="/initations">Initations</Link>
          <span>/</span>
          <Link href="/raffles">Raffles</Link>
        </div>
        <div className={styles.socials}>
          <a href={TWITTER_URL}>
            <IconTwitter />
          </a>
          <a href={DISCORD_URL}>
            <IconDiscord />
          </a>
        </div>
        <div className={styles.wallet}>
          {!publicKey ? <p>Connect Wallet</p> :
            <p>{getShortenAddress(publicKey)}</p>
          }
          <p>{balance.toFixed(2)}</p>
        </div>
      </div>
      <img
        src={isGame ? "/img/titleGame.png" : "/img/title.png"}
        className={styles.mdTitle}
        height="36px"
        alt=""
      />
      <div className={styles.border} />
    </div>
  );
};
