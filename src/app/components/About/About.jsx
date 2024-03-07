import Link from "next/link"
import React from "react"
import Image from "next/image"

const About = () => {
  return (
    <>
      <div className="dark:bg-[#121212] bg-[#f9f9f9]">
        <div className="flex flex-col sm:pl-8 md:pl-16 lg:pl-32 xl:mt-8 xl:pl-48 ">
          <h3 className="mt-40 h-4 pl-10 text-xl font-medium text-black dark:text-white">
            Hi, My name is!
          </h3>
          <div className="font-poppins pl-10 text-6xl">
            <span className="font-medium dark:text-purple-300 text-purple-400">
              Talona
            </span>
            <span className="dark:text-purple-300 text-purple-400"> Costa</span>
            <span className="font-medium dark:text-purple-300 text-purple-400">
              .
            </span>
          </div>
          <h2 className="font-poppins pl-12 text-3xl text-black dark:text-white">
            Sou um Engenheiro de Software
          </h2>
          <p
            className=" font-roboto text-paragraph-bg pl-12 leading-relaxed
         text-zinc-600 dark:text-zinc-300"
          >
            criando experiências digitais impactantes e funcionais <br />
            solucionando problemas complexos de maneira inovadora e funcional.
          </p>
          <div className="flex justify-start py-2 pb-32 pl-12">
            <Link href="/Blog/HomeBlog" passHref>
              <div
                className="button h-12 w-40 cursor-pointer select-none rounded-lg border-b-[1px]
          border-purple-200 bg-purple-400 dark:bg-purple-300 transition-all duration-150
          hover:bg-purple-500 dark:hover:bg-purple-400 active:translate-y-3
        dark:shadow-zinc-800 shadow-md shadow-zinc-300">
                <span
                  className="font-poppins flex h-full items-center justify-center text-lg font-medium 
                text-white dark:text-black"
                >
                Meu blog!
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
