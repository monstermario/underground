import {
  Keypair
} from "@solana/web3.js";
import { string2Uint8Array, transferSOL } from "../../../utils/apiFunctions";



export default async (req: any, res: any) => {
  const { method } = req;
  const data = req.body

  // let signatureBalance = await fetch(`https://api.${process.env.NEXT_PUBLIC_SOLANA_NETWORK}.solana.com/`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     "jsonrpc": "2.0",
  //     "id": 1,
  //     "method": "getTransaction",
  //     "params": [
  //       data.signature,
  //       "json"
  //     ]
  //   })
  // });

  // const balance = await signatureBalance.json();
  // console.log(balance)

  // let solAmount = (balance.result.meta.preBalances[0] - balance.result.meta.postBalances[0]) / 1000000000.0;
  // let fromPubKey = balance.result.transaction.message.accountKeys[0]
  // let toPubKey = balance.result.transaction.message.accountKeys[1]

  // load the owner wallet

  let ownerPrivateAddress: any = process.env.NEXT_PUBLIC_OWNER_WALLET
  let ownerWallet = Keypair.fromSecretKey(new Uint8Array(await string2Uint8Array(ownerPrivateAddress)));

  // if (toPubKey != ownerWallet.publicKey.toBase58()) return;

  let randomNum = Math.random();
  let randomChoice;
  (randomNum >= 2/3) ? randomChoice = 'LEFT' : (randomNum >= 1/3) ? randomChoice="MIDDLE" : randomChoice = 'RIGHT';

  console.log(randomChoice, data.choice)

  if (randomChoice == data.choice) {
    await transferSOL(ownerWallet, data.publicKey, data.amount * 2)
    res.json({
      success: true,
      choice: randomChoice,
    });
  } else {
    res.json({
      success: false,
      choice: randomChoice,
    });
  }
}