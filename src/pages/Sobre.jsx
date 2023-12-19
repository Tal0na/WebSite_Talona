import React from "react"
import Link from "next/link";
import Image from "next/image";
import Navbar from "../app/components/Navbar/NavbarComponent"

export default function Sobre() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-purple-800 p-8 rounded-md shadow-md max-w-md">
          <Image
            src="/foto/perfil.jpg"
            width={500}
            height={500}
            alt="Tales Costa - Front-end Developer"
            className="w-20 h-20 mx-auto rounded-full mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">Tales Costa</h1>
          <p className="text-white mb-6">Front-end Developer From Brazil</p>
          <p className="text-white leading-relaxed">
            Sou um experiente desenvolvedor front-end, com habilidades sólidas
            em JavaScript, HTML/CSS e design responsivo. Comprometido com a
            qualidade, tenho experiência em desenvolvimento orientado a testes.
            Minha paixão é criar experiências excepcionais para os usuários.
            Busco oportunidades para contribuir em projetos desafiadores,
            alinhados com os mais altos padrões de usabilidade e design.
          </p>
        </div>
      </div>
    </div>
  )
}
