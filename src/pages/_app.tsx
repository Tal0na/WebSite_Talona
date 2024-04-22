import "../app/globals.css";
import { useEffect, ComponentType } from 'react';
import { ThemeProvider } from "next-themes";
import Head from 'next/head';
import Footer from '../app/components/Footer/Footer';
import { Analytics } from "@vercel/analytics/react"
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';

// Inicialização do Google Analytics
ReactGA.initialize('G-44JJVVPVM6');

function trackPageviews() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ReactGA.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
}

interface MyAppProps {
  Component: ComponentType<any>;
  pageProps: any; // Define pageProps como any
}

function MyApp({ Component, pageProps }: MyAppProps) {
  // Rastreamento de página
  trackPageviews();

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
        <Footer />
        <Analytics />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;