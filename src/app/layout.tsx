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
        url: "https://i.imgur.com/VKtn6Fv.png",
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
    images: ["https://i.imgur.com/VKtn6Fv.png"],
    site: "@tTalona_Xona",
  },
  verification: {
    google: "TJfWJ0lzJo2y8hJBiJU0frm_SjaudSntNLDr9lV8E3w",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
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
  )
}
