import Head from 'next/head';
import { ReactNode } from 'react';
import { Poppins, Roboto } from 'next/font/google';
import './globals.css';

// Defina as fontes personalizadas
const customFontPoppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500'],
});

const customFontRoboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata = {
  title: "Talona - Design e Desenvolvimento Web",
  description: "Explore nosso portfólio para experiências web excepcionais. Contate-nos para colaborações inovadoras!",
  keywords: "design web, desenvolvimento web, portfólio, inovação",
  author: "Seu Nome",
  ogImage: "URL_DA_IMAGEM_PARA_REDES_SOCIAIS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${customFontPoppins.variable} ${customFontRoboto.variable}`}>
      <Head>
        {/* Metadados */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:image" content={metadata.ogImage} />
        {/* Outras tags do cabeçalho que você pode precisar adicionar */}
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}