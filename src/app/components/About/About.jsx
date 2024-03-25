import Link from "next/link"
import React from "react"

const About = () => {
  return (
    <>
      <div className="flex flex-col mt-64 sm:pl-8 md:pl-16 lg:pl-24 xl:pl-32 xl:pl-38 ">
        <h2 className=" h-4 pl-10 text-xl font-medium font-roboto text-black dark:text-white">
          Hi, My name is!
        </h2>
        <h1 className="font-poppins pl-10 text-6xl">
          <span className="font-medium dark:text-purple-300 text-purple-400">
            Talona
          </span>
          <span className="dark:text-purple-300 text-purple-400">Costa</span>
          <span className="font-medium dark:text-purple-300 text-purple-400">
            .
          </span>
        </h1>
        <h3 className="font-poppins pl-12 text-3xl text-black dark:text-white">
          Sou um Engenheiro de Software
        </h3>
        <p
          className=" font-roboto text-paragraph-bg pl-12 leading-relaxed
         text-zinc-600 dark:text-zinc-300"
        >
          Solucionando problemas complexos de maneira inovadora, funcional e
          eficiente. <br />
          Desenvolvendo soluções escaláveis e robustas para desafios
          tecnológicos.
          <br />
          Criando experiências digitais impactantes e funcionais.
        </p>
        <div className="flex justify-start py-2 pb-32 pl-12">
          <Link href="/Sobre" passHref>
            <div
              className="button h-12 w-40 cursor-pointer select-none rounded-lg border-b-[1px]
          border-purple-200 bg-purple-400 dark:bg-purple-300 transition-all duration-150
          hover:bg-purple-500 dark:hover:bg-purple-400 active:translate-y-3
        dark:shadow-zinc-800 shadow-md shadow-zinc-300"
            >
              <div
                className="font-poppins flex h-full items-center justify-center text-lg font-semibold
                text-white dark:text-black"
              >
                Continue!
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default About
