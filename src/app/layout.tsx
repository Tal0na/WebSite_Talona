import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Providers from "./providers"
import { Metadata } from "next"
import { ReactNode } from "react"
import { Poppins, Roboto } from "next/font/google"
import "./globals.css"

interface ExtendedMetadata extends Metadata {
  image: {
    url: string
    alt: string
  }
}

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

export const metadata: ExtendedMetadata = {
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
  image: {
    url: "https://i.imgur.com/uTAbqTv.png",
    alt: "logo talona",
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
      <meta property="og:image" content="https://i.imgur.com/uTAbqTv.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://talona.vercel.app/" />
      <meta property="twitter:title" content="Talona Site" />
      <meta property="twitter:description" content="Explore meu Web site." />
      <meta
        property="twitter:image"
        content="https://i.imgur.com/uTAbqTv.png"
      />

      <meta
        property="mastodon:image"
        content="https://i.imgur.com/uTAbqTv.png"
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
