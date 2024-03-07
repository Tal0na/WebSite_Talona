import React from "react"
import { useEffect } from "react"
import Image from "next/image"
import Navbar from "../app/components/Navbar/NavbarComponent"

export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre Mim"
  }, [])
  return (
    <div className="min-h-screen w-full dark:bg-[#121212] bg-[#f9f9f9]">
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="bg-purple-400 dark:bg-purple-300 p-8 rounded-md shadow-md max-w-md">
          <Image
            src="/foto/perfil.jpg"
            width={500}
            height={500}
            alt="Tales Costa - Developer"
            className="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold mb-4  text-white dark:text-black">
            Tales Costa
          </h1>
          <h2 className="text-lg font-semibold mb-2 text-white dark:text-black">
            Developer
          </h2>
          <p className="text-white dark:text-black mb-6">
            Sou um experiente desenvolvedor de software, com habilidades sólidas
            em diversas linguagens de programação e tecnologias de
            desenvolvimento. Comprometido com a qualidade, tenho experiência em
            desenvolvimento orientado a testes e em criar soluções inovadoras
            para os usuários. Estou sempre em busca de oportunidades para
            contribuir em projetos desafiadores, alinhados com os mais altos
            padrões de usabilidade e design.
          </p>
          <h2 className="text-lg font-semibold mb-2 text-white dark:text-black">
            Habilidades
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li className="text-white dark:text-black">JavaScript</li>
            <li className="text-white dark:text-black">HTML/CSS</li>
            <li className="text-white dark:text-blacktext-white dark:text-black">
              React.js
            </li>
            <li className="text-white dark:text-black">
              Testes de unidade e integração
            </li>
            <li className="text-white dark:text-black">Design responsivo</li>
          </ul>
          <h2 className="text-lg font-semibold mb-2 text-white dark:text-black">
            Experiência
          </h2>
          <p className="text-white dark:text-black mb-6">
            Além disso, possuo uma sólida compreensão dos princípios de UX/UI, o
            que me permite criar interfaces intuitivas e atraentes. Estou
            constantemente aprendendo e me atualizando sobre as últimas
            tecnologias e tendências do mercado para garantir que meus projetos
            estejam sempre na vanguarda da inovação.
          </p>
          <h2 className="text-lg font-semibold mb-2 text-white dark:text-black">
            Interesses
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li className="text-white dark:text-black">
              Participação em eventos de desenvolvimento
            </li>
            <li className="text-white dark:text-black">
              Contribuição para projetos de código aberto
            </li>
            <li className="text-white dark:text-black">
              Colaboração e compartilhamento de conhecimento
            </li>
            <li className="text-white dark:text-black">
              Resolução criativa de problemas
            </li>
            <li className="text-white dark:text-black">Aprendizado contínuo</li>
          </ul>
          <p className="text-white dark:text-black leading-relaxed">
            Estou sempre aberto a novas oportunidades de aprendizado e
            colaboração, então não hesite em entrar em contato se você estiver
            interessado em trabalhar juntos ou apenas trocar ideias!
          </p>
        </div>
      </div>
    </div>
  )
}
