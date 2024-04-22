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

// Função para rastrear mudanças de página
function trackPageviews() {
  const router = useRouter();

  useEffect(() => {
    // Adicionando script do Google Tag Manager
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-44JJVVPVM6';
    script1.async = true;
    document.head.appendChild(script1);

    // Adicionando script de configuração do Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-44JJVVPVM6');
    `;
    document.head.appendChild(script2);

    const handleRouteChange = (url: string) => {
      // Rastreamento de página
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
  pageProps: any;
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