import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layouts/layout'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../utils/theme'
import { Web3ReactProvider } from '@web3-react/core'

import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from '@ethersproject/providers'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import sal from 'sal.js'
import './../node_modules/sal.js/dist/sal.css'
import Head from 'next/head'

function getLibrary(provider: ExternalProvider | JsonRpcFetchFunc) {
  return new Web3Provider(provider)
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const currentRoute = router.pathname

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sal({ threshold: 0.1, once: true } as any)
  }, [router.asPath])

  useEffect(() => {
    sal()
  }, [])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="logo-final.svg" />
      </Head>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer position="top-center" />
          </Layout>
        </ChakraProvider>
      </Web3ReactProvider>
    </>
  )
}

export default MyApp
