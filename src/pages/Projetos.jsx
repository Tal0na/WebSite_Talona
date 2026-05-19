import React from "react"
import Link from "next/link"
import Navbar from "../app/components/Navbar/NavbarComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTableColumns,
  faCertificate,
  faTools,
} from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

const ProjectsPage = () => {
  return (
    <div className="min-h-screen w-full bg-gruvbox-light-bg dark:bg-gruvbox-bg font-indie">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center text-gruvbox-red dark:text-gruvbox-red mb-10">
          Aqui estão alguns dos meus projetos
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-gruvbox-light-fg dark:text-gruvbox-fg font-roboto">
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
            icon={faTableColumns}
          />
        </div>
      </div>
    </div>
  )
}

const ProjectCard = ({ title, description, link, icon }) => {
  return (
    <div className="bg-gruvbox-light-bg-soft dark:bg-gruvbox-bg1 rounded-xl shadow-md shadow-gruvbox-shadow-light dark:shadow-gruvbox-shadow-dark p-6 flex flex-col items-center justify-center">
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          className="text-lg mb-2 text-gruvbox-red dark:text-gruvbox-red"
        />
      )}
      <h2 className="text-lg font-bold text-center mb-2 text-gruvbox-light-fg dark:text-gruvbox-fg">
        {title}
      </h2>
      <p className="text-sm text-center text-gruvbox-light-fg2 dark:text-gruvbox-fg2">
        {description}
      </p>
      <Link href={link} passHref legacyBehavior>
        <a
          className="mt-4 bg-gruvbox-red dark:bg-gruvbox-red text-gruvbox-light-bg dark:text-gruvbox-bg-hard px-4 py-2 rounded-full inline-block
          hover:bg-gruvbox-orange dark:hover:bg-gruvbox-orange transition-transform duration-300 hover:scale-105"
        >
          Ver Projeto
        </a>
      </Link>
    </div>
  )
}

export default ProjectsPage
