import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { TinderProvider } from "../context/TinderContext";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://zljjkjqi5hwu.usemoralis.com:2053/server"
      appId="a63Nt1HzuhH6ggchpphCm9wIwT2Tsc2I0OmBkKgf"
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  );
}

export default MyApp;
