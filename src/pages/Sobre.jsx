import React from "react"
import { useEffect } from "react"
import Image from "next/image"
import Navbar from "../app/components/Navbar/NavbarComponent"
import Projects from "../app/components/Projects/Projects"
import Skills from "../app/components/Skills/Skills"
import Contact from "../app/components/Contact/Contact"

export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre Mim"
  }, [])

  return (
    <div className="min-h-screen w-full bg-gruvbox-light-bg dark:bg-gruvbox-bg">
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="p-8 rounded-md shadow-md shadow-gruvbox-shadow-light dark:shadow-gruvbox-shadow-dark bg-gruvbox-light-bg-soft dark:bg-gruvbox-bg-hard max-w-4xl mt-4">
          <Image
            src="/foto/perfil.jpg"
            width={500}
            height={500}
            alt="Tales Costa - Developer"
            className="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h1 className="font-poppins text-3xl">
            <span className="font-medium text-gruvbox-red dark:text-gruvbox-red">
              Tales
            </span>
            <span className="text-gruvbox-red dark:text-gruvbox-red">
              Costa
            </span>
            <span className="font-medium text-gruvbox-red dark:text-gruvbox-red">
              .
            </span>
          </h1>
          <h2 className="text-lg font-semibold mb-2 text-gruvbox-light-fg dark:text-gruvbox-fg pl-1">
            Desenvolvedor de Software
          </h2>
          <p className="text-gruvbox-light-fg2 dark:text-gruvbox-fg2 mb-6 text-lg pl-1">
            Sou um experiente desenvolvedor de software, com habilidades sólidas
            em diversas linguagens de programação e tecnologias de
            desenvolvimento. Comprometido com a qualidade, tenho experiência em
            desenvolvimento orientado a testes e em criar soluções inovadoras
            para os usuários. Estou sempre em busca de oportunidades para
            contribuir em projetos desafiadores, alinhados com os mais altos
            padrões de usabilidade e design.
          </p>
        </div>
      </div>
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
