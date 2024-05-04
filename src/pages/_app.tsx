import "../app/globals.css";
import {ComponentType} from 'react';
import { ThemeProvider } from "next-themes";
import Head from 'next/head';
import Footer from '../app/components/Footer/Footer';
import { Analytics } from "@vercel/analytics/react"


interface MyAppProps {
  Component: ComponentType<any>;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Head>
        <link rel="icon" href="/ico/favicon-32x32.png" />
      </Head>
      <div>
        <Component {...pageProps} />
        <Footer />
        <Analytics />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;