import React from "react"
import { useEffect } from "react"
import Navbar from "../app/components/Navbar/NavbarComponent"

const Myself = () => {
  useEffect(() => {
    document.title = "Myself"
  }, [])

  return (
    <div className="min-h-screen w-full bg-gruvbox-light-bg dark:bg-gruvbox-bg font-indie">
      <Navbar />

      <div className="flex flex-col p-8">
        <div className="border-b border-gruvbox-light-border dark:border-gruvbox-border">
          <h1 className="text-center mt-10 text-2xl font-bold text-gruvbox-red dark:text-gruvbox-red-bright">
            Um espaço para me expressar
          </h1>
          <h2 className="text-lg text-center mt-2 font-poppins">
            Diário Aberto: Explorando Minhas Ideias e Sentimentos
          </h2>
        </div>

        <div className="py-8">
          <div className="mt-4 relative">
            <span className="border-b border-gruvbox-light-border dark:border-gruvbox-border relative">
              Talona - 07/03/2024
            </span>
          </div>
          <br />
          <span className="border-b border-gruvbox-light-border dark:border-gruvbox-border relative">
            Faculdade
          </span>
          <br />
          <span className="border-b border-gruvbox-light-border dark:border-gruvbox-border relative">
            Começo
          </span>
          <br />
          <span className="border-b border-gruvbox-light-border dark:border-gruvbox-border relative">
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

      <footer className="border-t border-gruvbox-light-border dark:border-gruvbox-border text-xs p-4 absolute bottom-0 w-full">
        @talona
      </footer>
    </div>
  )
}

export default Myself
