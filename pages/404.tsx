import Head from "next/head";
import { Header } from "../components/header";

export default function Page404() {
  const styleSoon = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '120px',
    fontFamily: 'BlowBrush',
    fontWeight: 400,
    fontSize: '55px',
    color: 'white',
    letterSpacing: '3px'
  }

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
      <Header />
      <div style={styleSoon}>Comming Soon</div>
  </div>
  );
}
  