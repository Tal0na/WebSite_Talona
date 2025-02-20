import React from "react"
import Link from "next/link"
import Navbar from "../app/components/Navbar/NavbarComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faSpotify,
  faYoutube,
  faTableColumns,
  faCertificate,
  faTools,
} from "@fortawesome/free-solid-svg-icons"

const ProjectsPage = () => {
  return (
    <div className="min-h-screen w-full dark:bg-[#121212] bg-[#f9f9f9] font-indie">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center dark:text-violet-500 text-violet-600 mb-10">
          Aqui estão alguns dos meus projetos
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-black dark:text-white font-roboto ">
          <ProjectCard
            title="Coffe Com Codigo"
            description="Projetos Leves e Divertidos para Acompanhar Seu Café Matinal ☕️"
            link="https://coffe-com-codigo.vercel.app/"
            icon={faCertificate}
          />

          <ProjectCard
            title="Rotina-Verde"
            description="Organize seu dia com projetos leves e divertidos, personalizando sua rotina de maneira única e eficiente. 🌿"
            link="#"
            icon={faTableColumns}
          />

          <ProjectCard
            title="GitHub Repository"
            description="Todos os meus projetos no Github"
            link="https://github.com/Tal0na?tab=repositories"
            icon={faGithub}
          />

          <ProjectCard
            title="Habilidades e Tecnologias"
            description="Isso inclui HTML, CSS, JavaScript, React, Node.js, etc."
            link="/Stack"
            icon={faTableColumns}
          />

          <ProjectCard
            title="Certificação e ou Conquista"
            description=""
            link="#"
            icon={faCertificate}
          />

          <ProjectCard
            title="Ferramentas e Recursos"
            description="Descubra minhas ferramentas e recursos favoritos que uso."
            link="#"
            icon={faTools}
          />

          <ProjectCard
            title="Minhas Playlist"
            description="Clone UI Spotify"
            link="https://minhas-playlists.vercel.app/"
            icon={faSpotify}
          />

          <ProjectCard
            title="Vídeos Eternizados"
            description="Clone UI YouTube - Destacando o conteúdo de alguns canais."
            link="https://eternizar-videos.vercel.app/"
            icon={faYoutube}
          />

          <ProjectCard
            title="Página com os meus links"
            description="Redes sociais e mais."
            link="/Links"
          />
        </div>
      </div>
    </div>
  )
}

const ProjectCard = ({ title, description, link, icon }) => {
  return (
    <div className="bg-white dark:bg-black rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
      <FontAwesomeIcon
        icon={icon}
        className="text-lg mb-2 dark:text-violet-500 text-violet-600"
      />
      <h2 className="text-lg font-bold text-center mb-2">{title}</h2>
      <p className="text-sm text-center">{description}</p>
      <Link href={link} passHref>
        <div
          className="mt-4 dark:bg-violet-500 bg-violet-600 text-white dark:text-black px-4 py-2 rounded-full inline-block 
          hover:bg-violet-700 dark:hover:bg-violet-600 transition-transform duration-300 hover:scale-105"
        >
          Ver Projeto
        </div>
      </Link>
    </div>
  )
}

export default ProjectsPage
