import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TravelProvider from "@/Context/TravelContext";
import "@/styles/globals.css";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider value={defaultSystem}>
        <TravelProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </TravelProvider>
      </ChakraProvider>
    </>
  );
}
