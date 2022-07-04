import Head from "next/head";
import { GameCup } from "../../components/games/gameCup";
import { Header } from "../../components/header";

export default function UndergroundPage() {

  return (
    <div className="bg-main">
      <Head>
        <title>Underground - Underground</title>
        <meta
        name="description"
        content="Simplified NextJs with typescript example app integrated with Metaplex's Candy Machine"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header />
    <GameCup />
  </div>
  );
}
  