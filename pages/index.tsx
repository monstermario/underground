import Head from "next/head";
import { Home } from "../components/home";

export default function HomePage() {
  
  return (
    <>
      <Head>
        <title>Underground - Home</title>
        <meta
          name="description"
          content="Simplified NextJs with typescript example app integrated with Metaplex's Candy Machine"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
