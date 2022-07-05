import Head from "next/head";
import { GameHome } from "../../components/games/gameHome";
import { Header } from "../../components/header";

export default function GamePage() {

  return (
    <div className="bg-main">
      <Head>
        <title>Underground - Games</title>
        <meta
        name="description"
        content="Simplified NextJs with typescript example app integrated with Metaplex's Candy Machine"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header isGame />
    <GameHome />
  </div>
  );
}
  