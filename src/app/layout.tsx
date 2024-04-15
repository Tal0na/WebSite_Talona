
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Providers from "./providers"
import { Metadata } from 'next'
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
  description:
    "Explore meu site para experiências Web excepcionais. Criando experiências digitais impactantes e funcionais solucionando problemas complexos de maneira inovadora e funcional.",
  keywords: [
    'desenvolvimento web', 
    'portfólio', 
    'inovação', 
    'Talona', 
    'talona', 
    'Talonacosta', 
    'talonacosta', 
    'design web', 
    'inteligência artificial', 
    'IA', 
    'ia',  
    'Android',
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }

  
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
  
<meta property="og:type" content="website" />
<meta property="og:url" content="https://talonacosta.vercel.app/" />
<meta property="og:title" content="Talona Site" />
<meta property="og:description" content="Explore meu site para experiências Web excepcionais. Criando experiências digitais impactantes e funcionais solucionando problemas complexos de maneira inovadora e funcional." />
<meta property="og:image" content="/public/foto/Frame 60.png" />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://talonacosta.vercel.app/" />
<meta property="twitter:title" content="Talona Site" />
<meta property="twitter:description" content="Explore meu site para experiências Web excepcionais. Criando experiências digitais impactantes e funcionais solucionando problemas complexos de maneira inovadora e funcional." />
<meta property="twitter:image" content="/public/foto/Frame 60.png" />

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