"use client"
import styles from "../pages/styles.module.css"
import Navbar from "../app/components/Navbar/NavbarComponent"
import Link from "next/link"
import React, { useEffect, useState } from "react"


const Links = () => {
  useEffect(() => {
    document.title = 'Links';
  }, []);
  const [isCopied, setIsCopied] = useState(false)
  const [linkText, setLinkText] = useState("Discord")
  const [copiedMessage, setCopiedMessage] = useState(
    "Copiado para a área de transferência!"
  )

  useEffect(() => {
    const handleCopyToClipboard = () => {
      const textToCopy = "talona_"
      const tempInput = document.createElement("textarea")
      tempInput.value = textToCopy
      document.body.appendChild(tempInput)
      tempInput.select()
      document.execCommand("copy")
      document.body.removeChild(tempInput)

      console.log(`Copied to clipboard: ${textToCopy}`)
      setIsCopied(true)
      setLinkText("Copiado para a área de transferência: talona_")
      setCopiedMessage("")

      setTimeout(() => {
        setIsCopied(false)
        setLinkText("Discord")
        setCopiedMessage("Copiado para a área de transferência!")
      }, 5000)
    }

    const discordLink = document.getElementById("discord-link")
    if (discordLink) {
      discordLink.addEventListener("click", handleCopyToClipboard)
    }

    return () => {
      if (discordLink) {
        discordLink.removeEventListener("click", handleCopyToClipboard)
      }
    }
  }, [])

  return (
    <div className="min-h-screen w-full dark:bg-[#121212] bg-[#f9f9f9]">
      <Navbar />
      <h1 className="text-purple-r mt-10 text-center text-3xl font-bold dark:text-purple-300 text-purple-400">
        Meus Links
      </h1>
      <p className="text-1xl my-4 text-center text-black dark:text-white font-Poppins">
        Aqui estão alguns links importantes para me encontrar online.
      </p>
      <div id="links" className="mx-auto max-w-[675px]">
        <Link
          className=" dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 block transform rounded-lg
          border border-[#000000] border-opacity-75 p-2 text-center text-lg text-black shadow-md shadow-zinc-300 transition-transform duration-300 hover:scale-105 
          hover:bg-[#00acee] hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:text-white"
          href="https://twitter.com/Talonaa_"
          target="_blank"
          aria-label="Link para o perfil do Twitter / X @Talonaa_"
        >
          Twitter / X
        </Link>
        <Link
          className="dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 block transform rounded-lg
          border border-black border-opacity-75 p-2 text-center text-lg text-black shadow-md shadow-zinc-300 transition-transform duration-300 hover:scale-105 
          hover:bg-[#0A66C2] hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:text-white"
          href="https://www.linkedin.com/in/talona-costa/"
          target="_blank"
          aria-label="Link para o perfil do linkedin talona-costa"
        >
          Linkedin
        </Link>
        <Link
          className="dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10 text-decoration-none tap-highlight-transparent  font-roboto mx-10 my-3 block transform rounded-lg
          border border-black border-opacity-75 p-2 text-center text-lg text-black shadow-md shadow-zinc-300 transition-transform duration-300 hover:scale-105 hover:bg-zinc-600 
          hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-white"
          href="https://github.com/Tal0na"
          target="_blank"
          aria-label="Link para o perfil do Github Talonacosta"
        >
          Github
        </Link>

        <Link
          className="dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10 text-decoration-none tap-highlight-transparent 
          font-roboto mx-10 my-3 block transform rounded-lg border border-black border-opacity-75 p-2 
          text-center text-lg text-black shadow-md shadow-zinc-300 transition-transform duration-300 hover:scale-105
          hover:bg-[#db4a39] hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:text-white"
          href="mailto:talonacostaa@gmail.com"
          target="_blank"
          aria-label="Link para o Gmail talonacostaa@gmail.com"
        >
          Gmail
        </Link>
        <div>
          <a
            className="dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 block transform rounded-lg
            border border-black border-opacity-75 p-2 text-center text-lg text-black shadow-md shadow-zinc-300 transition-transform duration-300 hover:scale-105 
        hover:bg-blue-400 hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:text-white"
            id="discord-link"
            aria-label="Nick Name / apelido para perfil do Discord talona_"
          >
            {linkText}
          </a>

          {isCopied && <p>{copiedMessage}</p>}
        </div>
        <Link
          className="dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 block transform rounded-lg
          border border-black border-opacity-75 p-2 text-center text-lg text-black shadow-md shadow-zinc-300 transition-transform  duration-300 hover:scale-105 
          hover:bg-[#9146ff] hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:text-white"
          href="https://www.twitch.tv/talona_"
          target="_blank"
          aria-label="Link para o perfil do Twitch talona_"
        >
          Twitch
        </Link>
        <Link
          className="dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10  tap-highlight-transparent font-roboto mx-10 my-3 block transform rounded-lg
          border border-black border-opacity-75 p-2 text-center text-lg text-black shadow-md shadow-zinc-300 
          transition-transform duration-300 hover:scale-105 hover:bg-[#1ED760]
          hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:text-white "
          href="https://open.spotify.com/user/12184323470?si=ae5fd5e22a9141b7&nd=1"
          target="_blank"
          aria-label="Link para o perfil do Spotify"
        >
          Spotify
        </Link>
        <Link
          className={`dark:bg-[#1e1e1e] bg-[#f3f3f3] link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 block transform rounded-lg
          border border-black border-opacity-75 p-2 text-center text-lg text-black shadow-md  shadow-zinc-300 transition-transform duration-300 hover:scale-105 
        hover:text-white dark:border-white dark:text-white dark:shadow-zinc-600 dark:hover:text-white ${styles.instagram}`}
          href="https://www.instagram.com/talonaa_/"
          target="_blank"
          aria-label="Link para o perfil do Instagram @talonaa_"
        >
          Instagram
        </Link>
      </div>
      <h3 className="text-1xl my-4 text-center text-black dark:text-white">@Talona</h3>
    </div>
      
  )
}
export default Links
