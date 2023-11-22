import React from "react"

import Link from "next/link"

const About = () => {
  return (
    <>
      <div className="flex flex-col">
        <h3 className="text-2xl h-6 pl-10 mt-16">Oi, meu nome é</h3>
        <h1 className="font-poppins text-6xl font-medium text-purple-r pl-10">
          Tales Costa.
        </h1>
        <h2 className="font-poppins text-4xl left pl-12">
          Eu construo coisas para a web
        </h2>
        <p className="font-roboto text-1xl text-paragraph-bg pl-12 leading-relaxed">
          Sou um desenvolvedor web designer apaixonado por combinar criatividade
          e tecnologia para criar experiências digitais impactantes e
          funcionais.
        </p>

        <div className="flex justify-start pl-12">
          <a
            href="https://portifolio-talona.vercel.app/"
            className="rounded bg-purple-r my-4 px-8 py-4 font-medium text-black transition 
            duration-200 
    hover:bg-purple-600 active:bg-purple-700 text-xl text-center max-w-screen-md"
          >
            Meu Portifolio!
          </a>
        </div>
        <img
          src="/svgs/Union.svg"
          alt="rosa"
          className="self-end"
          width={200}
          height={200}
        />
      </div>
    </>
  )
}

export default About
