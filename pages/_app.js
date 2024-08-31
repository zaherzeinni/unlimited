import { ChakraProvider } from "@chakra-ui/react";
//import '../styles/globals.css'
import "../styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useEffect } from "react";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Unlmtd</title>
      </Head>






      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default MyApp;
