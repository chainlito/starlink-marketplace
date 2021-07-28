import Layout from '../components/Layout';
import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import theme                  from "../theme";
import { UseWalletProvider } from 'use-wallet';

function MyApp({ Component, pageProps }) {
  return (
      <UseWalletProvider 
            chainId={4}
            connectors={{
              walletconnect: { rpcUrl: 'https://mainnet.infura.io/v3/16d62dee5d09404dac52b6933c58a000' },
              fortmatic: { apiKey: 'pk_live_6D08A510AD752EA5' },
              portis: { dAppId: 'f67b5688-d623-4826-8f2c-160b51a09b38' },
              walletlink: { url: 'https://mainnet.infura.io/v3', appName: 'starlink-marketplace' },
            }}
        >
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </UseWalletProvider>
  );
}

export default MyApp
