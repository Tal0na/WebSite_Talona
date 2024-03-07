import React from "react"
import { useEffect } from 'react';
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTools,
  faCertificate,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import Navbar from "../app/components/Navbar/NavbarComponent"

const Projetos = () => {
  useEffect(() => {
    document.title = "Projetos"
  }, [])
  return (
    <>
      <div className="min-h-screen w-full dark:bg-[#121212] bg-[#f9f9f9]">
        <Navbar />

        <h1 className="font-poppins mb-20 mt-10 text-center text-3xl text-purple-600">
          Aqui estão alguns dos meus projetos
        </h1>

        <div className="grid grid-cols-8 grid-rows-2 gap-3 p-4">
          <a
            href="https://coffe-com-codigo.vercel.app/"
            target="_blank"
            className="col-span-2 row-span-2 flex h-32 transform flex-col items-center
                      justify-center rounded-xl border-2 border-[#4e3629] bg-[#e9d691]  dark:border-[#715244]
                      text-center text-[#4e3629] 
                      shadow-md transition-transform duration-300 hover:scale-105"
          >
            <span className="text-lg font-bold">Coffe Com Codigo</span>
            <p className="mt-2 text-sm">
              Projetos Leves e Divertidos para Acompanhar Seu Café Matinal ☕️
            </p>
          </a>

          {/* Item 2 */}
          <a
            href=""
            target="_blank"
            className="col-span-2 col-start-3 row-span-2 flex h-32 transform flex-col items-center
            justify-center rounded-xl border-2 border-black dark:border-white
            text-center text-black
            shadow-md transition-transform duration-300 hover:scale-105 bg-green-500 hover:bg-green-400"
          >
            <span className="text-lg font-bold">Rotina-Verde</span>
            <p className="mt-2 text-sm">
              Organize seu dia com projetos leves e divertidos, personalizando
              sua rotina de maneira única e eficiente. 🌿
            </p>
          </a>

          {/* Item 3 */}
          <a
            target="_blank"
            href=""
            className="col-start-5 row-span-2 flex transform items-center justify-center 
            rounded-xl bg-purple-300 text-center text-white shadow-md transition-transform duration-300 hover:scale-105"
          >
            <span className="text-lg font-bold">3</span>
          </a>

          {/* Item 4 */}
          <a
            target="_blank"
            href=""
            className="col-start-6 row-span-2 flex transform items-center justify-center 
          rounded-xl bg-purple-500 text-center text-white shadow-md transition-transform duration-300 hover:scale-105"
          >
            <span className="text-lg font-bold">4</span>
          </a>

          {/* Item 5 */}
          <a
            target="_blank"
            href="#"
            className="col-span-2 col-start-7 row-span-2 flex transform flex-col items-center 
          justify-center rounded-xl bg-yellow-500 text-center text-white shadow-md transition-transform duration-300 hover:scale-105"
          >
            <FontAwesomeIcon icon={faCertificate} className="mb-2 text-3xl" />
            <span className="mt-2 text-lg font-bold">
              Certificação e ou Conquista
            </span>
          </a>

          {/* Item 6 */}
          <a
            href="#"
            target="_blank"
            className="col-span-2 row-span-2 row-start-3 flex h-32 transform items-center justify-center 
          rounded-xl bg-purple-500 text-center text-white shadow-md transition-transform duration-300 hover:scale-105"
          >
            <span className="text-lg font-bold">6</span>
          </a>

          {/* Item 7 */}
          <a
            href="https://github.com/Talonacosta?tab=repositories"
            target="_blank"
            className="col-span-4 col-start-3 row-span-3 row-start-3 flex transform flex-col items-center 
        justify-center rounded-xl bg-purple-600 text-center text-white shadow-md transition-transform duration-300 hover:scale-105"
          >
            <FontAwesomeIcon icon={faGithub} className="mb-2 text-4xl" />
            <span className="text-lg font-bold">GitHub Repository</span>
            <p className="mt-1 text-lg">Todos os meus projetos no Github</p>
          </a>

          {/* Item 8 */}
          <Link
            href="/Stack"
            className="col-span-2 col-start-1 row-start-5 flex h-32 transform flex-col items-center 
          justify-center rounded-xl bg-orange-600 text-center text-white shadow-md transition-transform duration-300 hover:scale-105"
          >
            <FontAwesomeIcon icon={faTableColumns} className="mb-2 text-4xl" />

            <span className="mt-2 text-lg font-bold">
              Habilidades e Tecnologias
            </span>

            <p className="mt-1 text-sm">
              Isso inclui HTML, CSS, JavaScript, React, Node.js, etc.
            </p>
          </Link>

          {/* Item 9 */}
          <Link
            href="/Stack"
            className="col-span-2 col-start-7 row-span-2 row-start-3 flex transform flex-col 
          items-center justify-center rounded-xl bg-red-800 text-center text-white shadow-md transition-transform duration-300 
          hover:scale-105"
          >
            <FontAwesomeIcon icon={faTools} className="mb-2 text-3xl" />
            <span className="mt-2 text-lg font-bold">
              Ferramentas e Recursos
            </span>
            <p className="mt-1 text-sm">
              Descubra minhas ferramentas e recursos favoritos que uso.
            </p>
          </Link>

          {/* Item 10 */}
          <a
            href="#"
            target="_blank"
            className="col-start-7 row-start-5 flex h-32 transform items-center justify-center rounded-xl bg-purple-500 
          text-center text-white shadow-md transition-transform duration-300 hover:scale-105"
          >
            <span className="text-lg font-bold">10</span>
          </a>

          {/* Item 11 */}
          <a
            href="#"
            target="_blank"
            className="col-start-8 row-start-5 flex transform items-center justify-center rounded-xl bg-purple-400 
          text-center text-white shadow-md transition-transform duration-300 hover:scale-105"
          >
            <span className="text-lg font-bold">11</span>
          </a>

          {/* Item 12 */}
          <Link
            href="/Links"
            className="col-span-2 row-span-2 row-start-6 flex h-32 transform flex-col items-center justify-center 
          rounded-xl bg-blue-600 text-white shadow-md transition-transform duration-300 hover:scale-105"
          >
            <spam className="mt-2 text-lg font-bold">
              Pagina com os meus links
            </spam>

            <p className="mt-1 text-sm">Redes sociais e mais.</p>
          </Link>

          {/* Item 13 */}
          <a
            href="#"
            target="_blank"
            className="col-start-3 row-span-2 row-start-6 flex transform items-center justify-center 
          rounded-xl bg-purple-400 text-center text-white shadow-md transition-transform duration-300 hover:scale-105"
          >
            <span className="text-lg font-bold">13</span>
          </a>

          {/* Item 14 */}
          <a
            href="https://minhas-playlists.vercel.app/"
            target="_blank"
            className="col-span-3 col-start-4 row-span-2 row-start-6 flex transform flex-col 
          items-center justify-center rounded-xl bg-[#1DB954] text-center text-white shadow-md transition-transform duration-300 hover:scale-105"
          >
            <FontAwesomeIcon icon={faSpotify} className="mb-2 text-3xl" />
            <span className="mt-2 text-lg font-bold">Minhas Playlist</span>
            <p className="mt-1 text-sm">Clone UI Spotify</p>
          </a>

          {/* Item 15 */}
          <a
            href="https://eternizar-videos.vercel.app/"
            target="_blank"
            className="col-span-2 col-start-7 row-span-2 row-start-6 flex transform flex-col 
          items-center justify-center rounded-xl bg-red-500 text-center shadow-md transition-transform duration-300 hover:scale-105"
          >
            <FontAwesomeIcon icon={faYoutube} className="mb-2 text-3xl" />
            <span className="mt-2 text-xl font-bold">Vídeos Eternizados</span>
            <p className="mt-1 text-sm">
              Clone UI YouTube - Destacando o conteúdo de alguns canais .
            </p>
          </a>
        </div>
      </div>
    </>
  )
}

export default Projetos
