import styles from './GameHome.module.scss';
import Link from 'next/link';
import { IconRotate } from '../../ui/icon';

const LockIcon = () => (
  <img src="/img/lock.png" alt="" width="30px" />
)

export const GameHome: React.FC = () => {
  return <div className={styles.page}>
    <div className={styles.container}>
    {/* <h1>Underground Degen Games</h1> */}
      <div className={styles.box}>
        <div className={styles.gameState}>
            {/* <Link href="games/states"><a className={styles.btnState}>Game Stats</a></Link> */}
            <Link href="games/states"><a className={styles.btnState}><LockIcon /></a></Link>
        </div>
        <div className={styles.games}>
          <Link href="games/guess-the-cup">Guess The cup</Link>
          {/* <Link href="games/coin-flip">Coin flip</Link>
          <Link href="games/rock-paper-scissors">Rock paper scissors</Link>
          <Link href="games/whos-higher">whos higher</Link> */}
            <Link href="#"><a><LockIcon /></a></Link>
            <Link href="#"><a><LockIcon /></a></Link>
            <Link href="#"><a><LockIcon /></a></Link>
          {/* <h3>games illustration</h3> */}
        </div>
      </div>
      <div className={styles.rotate}>
        <IconRotate />
      </div>
    </div>
  </div>
}