import "../app/globals.css";
import { ThemeProvider } from "next-themes";
import Head from 'next/head';

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
      <div>
        
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
