import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Providers from "./providers"
import { Metadata } from "next"
import { ReactNode } from "react"
import { Poppins, Roboto } from "next/font/google"
import "./globals.css"

const customFontPoppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500"],
})

const customFontRoboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Talona Costa",
  description: "Explore meu site para conhecer mais sobre mim.",
  keywords: [
    "desenvolvimento web",
    "portfólio",
    "inovação",
    "Talona",
    "talona",
    "Talonacosta",
    "talonacosta",
    "design web",
    "inteligência artificial",
    "IA",
    "ia",
    "Android",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  metadataBase: new URL("https://talona.vercel.app"),
  openGraph: {
    title: "Talona Site",
    description: "Explore meu Web site.",
    url: "https://talona.vercel.app",
    siteName: "Talona",
    images: [
      {
        url: "https://i.imgur.com/tXlvlCu.png",
        width: 1200,
        height: 630,
        alt: "logo talona",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talona Site",
    description: "Explore meu Web site.",
    images: ["https://i.imgur.com/tXlvlCu.png"],
    site: "@tTalona_Xona", 
  },
  verification: {
    google: "TJfWJ0lzJo2y8hJBiJU0frm_SjaudSntNLDr9lV8E3w",
  },
}


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <meta
        name="description"
        content="Explore meu site para conhecer mais sobre mim."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://talona.vercel.app/" />
      <meta property="og:title" content="Talona Site" />
      <meta property="og:description" content="Explore meu Web site." />
      <meta property="og:image" content="https://i.imgur.com/tXlvlCu.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://talona.vercel.app/" />
      <meta property="twitter:title" content="Talona Site" />
      <meta property="twitter:description" content="Explore meu Web site." />
      <meta
        property="twitter:image"
        content="https://i.imgur.com/tXlvlCu.png"
      />

      <meta
        property="mastodon:image"
        content="https://i.imgur.com/tXlvlCu.png"
      />

      <meta
        name="google-site-verification"
        content="TJfWJ0lzJo2y8hJBiJU0frm_SjaudSntNLDr9lV8E3w"
      />

      <html
        lang="pt-BR"
        className={`${customFontPoppins.variable} ${customFontRoboto.variable}`}
      >
        <body>
          <Providers>
            {children}
            <Analytics />
            <SpeedInsights />
          </Providers>
        </body>
      </html>
    </>
  )
}
