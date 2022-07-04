import { useState } from 'react';
import Link from 'next/link';
import { DISCORD_URL, TWITTER_URL } from '../../constant';
import { IconDiscord, IconTwitter } from '../ui/icon';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
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
          <img src="/img/logo.png" width="85px" alt="" />
          <img
            src="/img/title.png"
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
      </div>
      <img
        src="/img/title.png"
        className={styles.mdTitle}
        height="36px"
        alt=""
      />
      <div className={styles.border} />
    </div>
  );
};
