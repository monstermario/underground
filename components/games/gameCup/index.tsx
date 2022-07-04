import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import axios from 'axios';
import { useRef, useState } from 'react';
import styles from './GameCup.module.scss';

export const GameCup: React.FC = () => {
  const refVideo = useRef<HTMLVideoElement>(null);
  const { connection } = useConnection();
  const { connected, publicKey, signTransaction, wallet, wallets, select, connect, connecting } = useWallet();

  const [step, setStep] = useState<number>(0);
  const [currentPosition, setCurrentPosition] = useState<string>('LEFT');
  const [choise, setChoise] = useState<string>('');
  const [currentPrice, setCurrentPrice] = useState<number>(0.05);

  const endVideo = () => {
    if (!refVideo.current) return;
    if (step === 1) {
      refVideo.current.play();
    }
    else if (step === 2 && choise !== '') {
      refVideo.current.src = `/video/win_${choise.toLowerCase()}.mp4`;
      setChoise('');
      refVideo.current.play();
    } else if (step === 3 && choise !== '') {
      refVideo.current.src = `/video/lose_${choise.toLowerCase()}.mp4`;
      setChoise('');
      refVideo.current.play();
    }
  }

  const playGame = async () => {
    if (!publicKey) return
    setStep(1);

    // get the setting infos
    let result: any = await axios({
      method: 'post',
      url: '/api/owner',
    });

    var transaction: Transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(result.data.pubKey), // owner's public key
        lamports: currentPrice * LAMPORTS_PER_SOL // Investing 1 SOL. Remember 1 Lamport = 10^-9 SOL.
      }),
    );

    // Setting the variables for the transaction
    transaction.feePayer = publicKey;
    let blockhashObj: any = await connection.getRecentBlockhash();
    transaction.recentBlockhash = await blockhashObj.blockhash;

    // Transaction constructor initialized successfully
    if (transaction) {
      console.log("Txn created successfully");
    }
    
    // Request creator to sign the transaction (allow the transaction)
    // @ts-ignore
    signTransaction(transaction).then(async (signed) => {
      if (refVideo.current) {
        refVideo.current.src = `/video/start.mp4`;
        refVideo.current.load();
        refVideo.current.play();
      }
      // The signature is generated
      connection.sendRawTransaction(signed.serialize()).then(async (signature: any) => {
        // Confirm whether the transaction went through or not
        await connection.confirmTransaction(signature);

        //Signature or the txn hash
        // console.log("Signature: ", signature);


        axios({
          method: 'post',
          url: '/api/cup/guess_cup',
          data: {
            signature: signature,
            publicKey: publicKey.toString(),
            choice: currentPosition,
            amount: currentPrice,
          }
        }).then((res: any) => {
          setChoise(res.data.choice);
          if (res.data.success) {
            setStep(2)
          } else {
            setStep(3)
          }

          // if (res.data.choice == 'HEAD') {
          //   setHead(true)
          // } else {
          //   setHead(false)
          // }
        }).catch((err:any) => {
          console.log(err);
        });
      }).catch((err: any) => {
        console.log(err)
        setStep(0);
      })
    }).catch((err: any) => { // reject the request or etc
      console.log(err)
      setStep(0);
    });
  };
  const claim = () => {
    setStep(0);
    setChoise('');
    if (refVideo.current) {
      if (!refVideo.current.paused) refVideo.current.pause();
      
      // refVideo.current.play();
      // refVideo.current.pause();
    }
  };
  const connectWallet = () => {
    try {
      if (!connected && wallet && wallet.name === wallets[0].name) {
        if (!connecting)
          connect()
            .then(() => {
              close();
            })
            .catch((err) => {
              console.log(err);
            });
        else {
          console.log('Already in progress');
        }
      } else {
        console.log('progreess');
        select(wallets[0].name);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.advertising}></div>
        <div className={styles.main}>
          <h1>Guess the cup</h1>
          <div className={styles.box}>
            <div className={styles.video}>
              {/* {choise === '' ? */}
                <video playsInline muted ref={refVideo} onEnded={endVideo}>
                  <source src="/video/start.mp4" type="video/mp4" />
                </video>
                {/* : step === 2 ? <video playsInline muted autoPlay loop>
                  <source src={`/video/win_${choise.toLowerCase()}.mp4`} type="video/mp4" />
                </video>
                : <video playsInline muted autoPlay loop>
                  <source src={`/video/lose_${choise.toLowerCase()}.mp4`} type="video/mp4" />
                </video>
              } */}

            </div>
            {!publicKey ? (
              <div
                className={styles.claimBtn}
                onClick={connectWallet}
              >
                <button>Connect Wallet</button>
              </div>
            ) : step === 0 ? (
              <div className={styles.btns}>
                <div className={styles.btnGroup}>
                  <button
                    disabled={currentPosition === 'LEFT'}
                    onClick={() => {
                      setCurrentPosition('LEFT');
                    }}
                  >
                    left
                  </button>
                  <div className={styles.amount}>
                    <button
                      disabled={currentPrice == 0.05}
                      onClick={() => {
                        setCurrentPrice(Number(Math.max(currentPrice - 0.05, 0.05).toFixed(2)));
                      }}
                    >
                      -
                    </button>
                    <span>{currentPrice}</span>
                    <button
                      disabled={currentPrice == 5}
                      onClick={() => {
                        setCurrentPrice(Number(Math.min(currentPrice + 0.05, 5).toFixed(2)));
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={styles.btnGroup}>
                  <button
                    disabled={currentPosition === 'MIDDLE'}
                    onClick={() => {
                      setCurrentPosition('MIDDLE');
                    }}
                  >
                    middle
                  </button>
                  <button onClick={playGame}>play</button>
                </div>
                <div className={styles.btnGroup}>
                  <button
                    disabled={currentPosition === 'RIGHT'}
                    onClick={() => {
                      setCurrentPosition('RIGHT');
                    }}
                  >
                    right
                  </button>
                </div>
              </div>
            ) : step === 1 ? (
              <div
                className={styles.againBtn}
              >
                <button disabled={true}>playing ...</button>
              </div>
            ) : step === 2 ? (
              <div className={styles.claimBtn}>
                <button onClick={claim}>Claim and play again</button>
              </div>
            ) : (
              <div
                className={styles.againBtn}
              >
                <button
                onClick={() => {
                  setStep(0);
                }}>play AGAIN</button>
              </div>
            )}
          </div>
        </div>
        <div className={styles.advertising}></div>
      </div>
    </div>
  );
};
