import "../app/globals.css";
import { ThemeProvider } from "next-themes";
import Head from 'next/head';
import Footer from '../app/components/Footer/Footer';
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
       <Head>
        <link rel="icon" href="/foto/logotopo.png" />
      </Head>
      <div >
        <Component {...pageProps} />
        <Footer />
        <Analytics />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
