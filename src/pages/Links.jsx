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
  FaLastfm,
  FaMastodon,
  FaReddit,
  FaTiktok,
} from "react-icons/fa6"
import { BsCloudFog2Fill } from "react-icons/bs"
import { SiGmail, SiThreads } from "react-icons/si"

// linkBase configurado com as cores exatas:
// Dark: Fundo #2E2E2E, Texto/Borda #D6C8A4
// Light: Fundo #F9F5D7 (Creme), Texto/Borda #2E2E2E
const linkBase = `
  /* Cores Light Mode */
  bg-[#F9F5D7] text-[#2E2E2E] border-[#2E2E2E]

  /* Cores Dark Mode (Suas cores exatas) */
  dark:bg-[#2E2E2E] dark:text-[#D6C8A4] dark:border-[#D6C8A4]

  border-2 font-roboto mx-10 my-3 block transform rounded-lg
  p-2 text-center text-lg font-bold
  shadow-md transition-all duration-300 hover:scale-105

  /* Hover dinâmico: inverte as cores conforme o tema */
  hover:bg-[#2E2E2E] hover:text-[#F9F5D7]
  dark:hover:bg-[#D6C8A4] dark:hover:text-[#2E2E2E]
`

const Links = () => {
  useEffect(() => {
    document.title = "Links"
  }, [])

  return (
    <div className="min-h-screen w-full bg-[#F9F5D7] dark:bg-[#2E2E2E] font-poppins pb-10 transition-colors duration-500">
      <Navbar />

      <h1 className="mt-10 text-center text-3xl font-bold text-[#2E2E2E] dark:text-[#D6C8A4]">
        Meus Links
      </h1>
      <p className="text-lg my-4 text-center text-[#2E2E2E] dark:text-[#D6C8A4] opacity-80">
        Aqui estão alguns links importantes para me encontrar online.
      </p>

      <div id="links" className="mx-auto max-w-[675px]">
        {/* --- REDES SOCIAIS --- */}
        <h2 className="text-xl mt-8 text-center text-[#2E2E2E] dark:text-[#D6C8A4] font-bold">
          Redes Sociais
        </h2>

        <div className="mt-3">
          <Link
            className={linkBase}
            href="https://twitter.com/Talonaa_"
            target="_blank"
            aria-label="Twitter / X"
          >
            <FaTwitter className="inline-block mr-2" /> Twitter / X
          </Link>

          <Link
            className={linkBase}
            href="https://www.instagram.com/talonaa_/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram className="inline-block mr-2" /> Instagram
          </Link>

          <Link
            className={linkBase}
            href="https://www.threads.net/@talona_xona"
            target="_blank"
            aria-label="Threads"
          >
            <SiThreads className="inline-block mr-2" /> Threads
          </Link>

          <Link
            className={linkBase}
            href="https://mastodon.social/@Talona_"
            target="_blank"
            aria-label="Mastodon"
          >
            <FaMastodon className="inline-block mr-2" /> Mastodon
          </Link>

          <Link
            className={linkBase}
            href="https://bsky.app/profile/talona.bsky.social"
            target="_blank"
            aria-label="Bluesky"
          >
            <BsCloudFog2Fill className="inline-block mr-2" /> Bluesky
          </Link>

          <Link
            className={linkBase}
            href="https://www.tiktok.com/@talonaa_"
            target="_blank"
            aria-label="TikTok"
          >
            <FaTiktok className="inline-block mr-2" /> TikTok
          </Link>
        </div>

        {/* --- DESENVOLVIMENTO --- */}
        <h2 className="text-xl mt-10 text-center text-[#2E2E2E] dark:text-[#D6C8A4] font-bold">
          Plataformas de Desenvolvimento
        </h2>

        <div className="mt-3">
          <Link
            className={linkBase}
            href="https://www.linkedin.com/in/talona-costa/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="inline-block mr-2" /> LinkedIn
          </Link>

          <Link
            className={linkBase}
            href="https://github.com/Tal0na"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub className="inline-block mr-2" /> GitHub
          </Link>

          <Link
            className={linkBase}
            href="mailto:talonacostaa@gmail.com"
            target="_blank"
            aria-label="Gmail"
          >
            <SiGmail className="inline-block mr-2" /> Gmail
          </Link>
        </div>

        {/* --- OUTROS --- */}
        <h2 className="text-xl mt-10 text-center text-[#2E2E2E] dark:text-[#D6C8A4] font-bold">
          Outros
        </h2>

        <div className="mt-3">
          <Link
            className={linkBase}
            href="https://discord.com/channels/@talona_/"
            target="_blank"
            aria-label="Discord"
          >
            <FaDiscord className="inline-block mr-2" /> Discord
          </Link>

          <Link
            className={linkBase}
            href="https://www.twitch.tv/talona_"
            target="_blank"
            aria-label="Twitch"
          >
            <FaTwitch className="inline-block mr-2" /> Twitch
          </Link>

          <Link
            className={linkBase}
            href="https://www.reddit.com/user/Talona_/"
            target="_blank"
            aria-label="Reddit"
          >
            <FaReddit className="inline-block mr-2" /> Reddit
          </Link>

          <Link
            className={linkBase}
            href="https://open.spotify.com/user/12184323470"
            target="_blank"
            aria-label="Spotify"
          >
            <FaSpotify className="inline-block mr-2" /> Spotify
          </Link>

          <Link
            className={linkBase}
            href="https://www.last.fm/user/talona_"
            target="_blank"
            aria-label="Last.fm"
          >
            <FaLastfm className="inline-block mr-2" /> Last.fm
          </Link>
        </div>
      </div>

      <h3 className="text-lg mt-12 mb-8 text-center text-[#2E2E2E] dark:text-[#D6C8A4] opacity-70 font-bold">
        @Talona
      </h3>
    </div>
  )
}

export default Links
