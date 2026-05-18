import Link from "next/link"
import React from "react"

const About = () => {
  return (
    <div className="items-center">
      <div className="flex flex-col sm:pl-8 md:pl-16 lg:pl-24 xl:pl-32 xl:pl-38">
        <h2 className="h-4 pl-10 text-xl font-medium font-roboto text-gruvbox-light-fg2 dark:text-gruvbox-fg3">
          Oi, Meu nome é!
        </h2>

        <h1 className="font-poppins pl-10 text-6xl">
          <span className="font-medium text-gruvbox-red dark:text-gruvbox-red-bright">
            Tales
          </span>
          <span className="text-gruvbox-red dark:text-gruvbox-red-bright">
            Costa
          </span>
          <span className="font-medium text-gruvbox-red dark:text-gruvbox-red-bright">
            .
          </span>
        </h1>

        <h3 className="font-poppins pl-12 text-3xl text-gruvbox-light-fg dark:text-gruvbox-fg">
          Sou um Desenvolvedor de Soluções de Software
        </h3>

        <p className="font-roboto pl-12 text-gruvbox-light-fg2 dark:text-gruvbox-fg3 font-light mb-2">
          Solucionando problemas complexos de maneira inovadora, funcional e
          eficiente. <br />
          Desenvolvendo soluções escaláveis e robustas para desafios
          tecnológicos. <br />
          Criando experiências digitais impactantes e funcionais.
        </p>

        <div className="flex justify-start py-2 pb-32 pl-12">
          <Link href="/Sobre" passHref>
            <div
              className="button h-12 w-40 cursor-pointer select-none
                rounded-lg border-b-[1px] border-gruvbox-red
                bg-gruvbox-red dark:bg-gruvbox-red-bright
                transition-all duration-150
                hover:bg-gruvbox-red-bright dark:hover:opacity-90
                active:translate-y-3
                shadow-md shadow-gruvbox-shadow-light dark:shadow-gruvbox-shadow-dark"
            >
              <div className="font-poppins flex h-full items-center justify-center text-lg font-semibold text-gruvbox-light-bg dark:text-gruvbox-bg">
                Continue!
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
