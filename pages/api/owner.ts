import {
  Keypair,
} from "@solana/web3.js";
import { string2Uint8Array } from "../../utils/apiFunctions";

export default async (req : any, res : any) => {
  const { method } = req;

  let ownerPrivateAddress : any = process.env.NEXT_PUBLIC_OWNER_WALLET
  // load the owner wallet
  let ownerWallet = Keypair.fromSecretKey(new Uint8Array(await string2Uint8Array(ownerPrivateAddress)));

  res.json({ 
    pubKey: ownerWallet.publicKey.toString() 
  });
}