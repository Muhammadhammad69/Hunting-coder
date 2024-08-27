import "@/styles/globals.css";
import HeaderNav from "@/HomeComponents/HeaderNav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeaderNav />
      <Component {...pageProps} />{" "}
    </>
  );
}
