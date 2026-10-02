import Providers from "./providers"
import Script from "next/script"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import "./globals.css"

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
    site: "@Talona_Xona",
  },
  verification: {
    google: "TJfWJ0lzJo2y8hJBiJU0frm_SjaudSntNLDr9lV8E3w",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          {children}
        </Providers>

        <Script
          src="https://analytics.talona.com.br/script.js"
          data-website-id="1b568788-5123-436f-a27f-eae8de7ecc70"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}