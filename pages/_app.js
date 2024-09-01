import { ChakraProvider } from "@chakra-ui/react";
//import '../styles/globals.css'
import "../styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

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
        <ToastContainer/>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
