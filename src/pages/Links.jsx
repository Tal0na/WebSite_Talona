"use client"
import styles from "../pages/styles.module.css"
import Navbar from "../app/components/Navbar/NavbarComponent"
import Link from "next/link"
import React, { useEffect } from "react"
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDiscord,
  FaTwitch,
  FaSpotify,
} from "react-icons/fa"
import { SiGmail } from "react-icons/si"

const Links = () => {
  useEffect(() => {
    document.title = "Links"
  }, [])

  return (
    <div className="min-h-screen w-full dark:bg-[#121212] bg-[#f9f9f9] font-Poppins">
      <Navbar />
      <h1 className="text-purple-r mt-10 text-center text-3xl font-bold dark:text-violet-500 text-violet-600">
        Meus Links
      </h1>
      <p className="text-1xl my-4 text-center text-black dark:text-white">
        Aqui estão alguns links importantes para me encontrar online.
      </p>



      <div id="links" className="mx-auto max-w-[675px]">
      <h2 className="text-xl mt-6 text-center dark:text-violet-500 text-violet-600 font-bold">Redes Sociais</h2>
      <div className="mt-3">
        <Link
          className=" dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 block transform rounded-lg
          border border-[#000000] border-opacity-75 p-2 text-center text-lg text-black shadow-md shadow-zinc-300 transition-transform duration-300 hover:scale-105 
          dark:hover:bg-[#00acee] hover:bg-[#00acee] hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:text-white"
          href="https://twitter.com/Talonaa_"
          target="_blank"
          aria-label="Link para o perfil do Twitter / X @Talonaa_"
        >
          <FaTwitter className="inline-block mr-2" />
          Twitter / X
        </Link>
        <Link
          className={`dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 block transform rounded-lg
          border border-black border-opacity-75 p-2 text-center text-lg text-black shadow-md  shadow-zinc-300 transition-transform duration-300 hover:scale-105 
        hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:text-white ${styles.instagram}`}
          href="https://www.instagram.com/talonaa_/"
          target="_blank"
          aria-label="Link para o perfil do Instagram @talonaa_"
        >
          <FaInstagram className="inline-block mr-2" /> Instagram
        </Link>
        <Link
          className="dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10 text-decoration-none tap-highlight-transparent  font-roboto mx-10 my-3 block transform rounded-lg
          border border-black border-opacity-75 p-2 text-center text-lg text-black shadow-md shadow-zinc-300 transition-transform duration-300 hover:scale-105 hover:bg-zinc-600 
          hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-white"
          href="https://www.threads.net/@talonaa_"
          target="_blank"
          aria-label="Link para o perfil do Threads talona_"
        >
          <FaInstagram className="inline-block mr-2" /> Threads
        </Link>
        </div>
          {/* Plataformas de Desenvolvimento */}
          <h2 className="text-xl mt-6 text-center  dark:text-violet-500 text-violet-600 font-bold">Plataformas de Desenvolvimento</h2>
        <Link
          className="dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 block transform rounded-lg
          border border-black border-opacity-75 p-2 text-center text-lg text-black shadow-md shadow-zinc-300 transition-transform duration-300 hover:scale-105 
          dark:hover:bg-[#0A66C2] hover:bg-[#0A66C2] hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:text-white"
          href="https://www.linkedin.com/in/talona-costa/"
          target="_blank"
          aria-label="Link para o perfil do linkedin talona-costa"
        >
          <FaLinkedin className="inline-block mr-2" /> Linkedin
        </Link>
        <Link
          className="dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10 text-decoration-none tap-highlight-transparent  font-roboto mx-10 my-3 block transform rounded-lg
          border border-black border-opacity-75 p-2 text-center text-lg text-black shadow-md shadow-zinc-300 transition-transform duration-300 hover:scale-105 hover:bg-zinc-600 
          hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-white"
          href="https://github.com/Tal0na"
          target="_blank"
          aria-label="Link para o perfil do Github Talonacosta"
        >
          <FaGithub className="inline-block mr-2" /> GitHub
        </Link>

        <Link
          className="dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10 text-decoration-none tap-highlight-transparent 
          font-roboto mx-10 my-3 block transform rounded-lg border border-black border-opacity-75 p-2 
          text-center text-lg text-black shadow-md shadow-zinc-300 transition-transform duration-300 hover:scale-105
          dark:hover:bg-[#db4a39] hover:bg-[#db4a39] hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:text-white"
          href="mailto:talonacostaa@gmail.com"
          target="_blank"
          aria-label="Link para o Gmail talonacostaa@gmail.com"
        >
          <SiGmail className="inline-block mr-2" /> Gmail
        </Link>
        <h2 className="text-xl mt-6 text-center dark:text-violet-500 text-violet-600 font-bold">Outros</h2>
        <Link
          className="dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 block transform rounded-lg
            border border-black border-opacity-75 p-2 text-center text-lg text-black shadow-md shadow-zinc-300 transition-transform duration-300 hover:scale-105 
        hover:bg-blue-400 dark:hover:bg-blue-400 hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:text-white"
          aria-label="Nick Name / apelido para perfil do Discord talona_"
          href="https://discord.com/channels/@talona_/"
          target="_blank"
        >
          <FaDiscord className="inline-block mr-2" /> Discord
        </Link>
       
        <Link
          className="dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 block transform rounded-lg
          border border-black border-opacity-75 p-2 text-center text-lg text-black shadow-md shadow-zinc-300 transition-transform  duration-300 hover:scale-105 
          hover:bg-[#9146ff] dark:hover:bg-[#9146ff] hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:text-white"
          href="https://www.twitch.tv/talona_"
          target="_blank"
          aria-label="Link para o perfil do Twitch talona_"
        >
          <FaTwitch className="inline-block mr-2" /> Twitch
        </Link>
        <Link
          className="dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10  tap-highlight-transparent font-roboto mx-10 my-3 block transform rounded-lg
          border border-black border-opacity-75 p-2 text-center text-lg text-black shadow-md shadow-zinc-300 
          transition-transform duration-300 hover:scale-105 hover:bg-[#1ED760] dark:hover:bg-[#1ED760]
          hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:text-white "
          href="https://open.spotify.com/user/12184323470?si=ae5fd5e22a9141b7&nd=1"
          target="_blank"
          aria-label="Link para o perfil do Spotify"
        >
          <FaSpotify className="inline-block mr-2" /> Spotify
        </Link>
      </div>
      <h3 className="text-1xl mt-1 text-center text-black dark:text-white">
        @Talona
      </h3>
    </div>
  )
}
export default Links
