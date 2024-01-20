import Head from "next/head";
import Providers from "./providers";
import { ReactNode } from "react";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

const customFontPoppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const customFontRoboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Talona - Design e Desenvolvimento Web",
  description:
    "Explore meu site para experiências web excepcionais. Contate-nos para colaborações inovadoras!",
  keywords:
    "design web, desenvolvimento web, portfólio, inovação ,Talona ,talona",
  author: "Tales Costa",
  ogImage: "/foto/florborda.png",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html
        lang="pt-BR"
        className={`${customFontPoppins.variable} ${customFontRoboto.variable}`}
      >
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta name="author" content={metadata.author} />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}${metadata.ogImage}`} />
         
          <title>{metadata.title}</title>
        </Head>
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
}
