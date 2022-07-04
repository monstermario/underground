import Head from "next/head";
import { Header } from "../components/header";
import { Banner } from "../components/underground/banner";
import { Degens } from "../components/underground/degens";
import { Faq } from "../components/underground/faq";
import { Photo } from "../components/underground/photo";
import { Takeover } from "../components/underground/takeover";
import { Team } from "../components/underground/team";

export default function UndergroundPage() {

  return (
    <div className="bg-underground">
      <Head>
        <title>Underground - Underground</title>
        <meta
        name="description"
        content="Simplified NextJs with typescript example app integrated with Metaplex's Candy Machine"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <Degens />
      <Takeover />
      <Team />
      <Photo />
      <Faq />
    </div>
  );
}
  