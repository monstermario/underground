import Base58 from 'bs58';
import {
    Connection,
    clusterApiUrl,
    Transaction,
    SystemProgram,
    LAMPORTS_PER_SOL,
    sendAndConfirmTransaction,
    PublicKey,
} from "@solana/web3.js";
  
export const string2Uint8Array = async (str: string) => {
    var decodedString;
    try {
      decodedString = Base58.decode(str);
    } catch (error) {
      return [];
    }
    let arr = [];
  
    for (var i = 0; i < decodedString.length; i++) {
      arr.push(decodedString[i]);
    };
  
    return arr;
  }
  
export const transferSOL = async (fromWallet: any, toPubKey: any, sol: any) => {
    // @ts-ignore
    const connection = new Connection(clusterApiUrl(process.env.NEXT_PUBLIC_SOLANA_NETWORK), 'confirmed');
  
    try {
      // Add transfer instruction to transaction
      let transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: fromWallet.publicKey,
          toPubkey: new PublicKey(toPubKey),
          lamports: sol * LAMPORTS_PER_SOL,
        }),
      );
  
      // Sign transaction, broadcast, and confirm
      let signature = await sendAndConfirmTransaction(
        connection,
        transaction,
        [fromWallet],
      );
  
      console.log(signature);
    } catch (err) {
      console.log(err)
      return false;
    }
  
    return true;
  };