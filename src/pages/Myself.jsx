import React from "react"
import { useEffect } from "react"
import Navbar from "../app/components/Navbar/NavbarComponent"

const Myself = () => {
  useEffect(() => {
    document.title = "Myself"
  }, [])
  return (
    <div className="min-h-screen w-full dark:bg-[#121212] bg-[#f9f9f9] font-indie">
      <Navbar />
      <div className="flex flex-col p-8 text-black dark:text-white">
        <div className="border-b border-gray-300 dark:border-zinc-600">
          <h1 className="text-center mt-10 text-2xl font-bold dark:text-purple-300 text-purple-400">
            Um espaço para me expressar
          </h1>

          <h2 className="text-lg text-center mt-2 text-black dark:text-white font-Poppins">
            Diário Aberto: Explorando Minhas Ideias e Sentimentos
          </h2>
        </div>
        <div className="py-8">
          <div className="mt-4 relative">
            <span className="border-b border-gray-300 dark:border-zinc-600 relative ">
              Talona - 07/03/2024
            </span>
          </div>
          <br />
          <span className="border-b border-gray-300 dark:border-zinc-600 relative ">
            Faculdade
          </span>
          <br />
          <span className="border-b border-gray-300 dark:border-zinc-600 relative">
            Começo
          </span>
          <br />
          
          <span className="border-b border-gray-300 dark:border-zinc-600 relative ">
            Rodeado de amigos e família, tomo um café, enquanto a música
            suavemente preenche o ambiente, criando uma atmosfera acolhedora e
            relaxante. Conversas animadas e risadas ecoam ao meu redor, enchendo
            meu coração de calor e felicidade. Cada gole de café é uma pausa
            revigorante, uma oportunidade de apreciar os momentos preciosos
            compartilhados com aqueles que mais amo. Envolto nessa atmosfera de
            conexão e alegria, sinto-me grato pela companhia dessas pessoas
            especiais em minha vida. Juntos, criamos memórias que serão
            lembradas com carinho por muitos anos.
          </span>
        </div>
      </div>
      <footer className="border-t border-gray-400 text-gray-600 text-xs p-4 absolute bottom-0 w-full">
        @talona
      </footer>
    </div>
  )
}

export default Myself
