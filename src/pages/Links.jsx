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

const linkBase = `
  bg-gruvbox-light-bg1 text-gruvbox-light-fg border-gruvbox-red
  dark:bg-gruvbox-bg1 dark:text-gruvbox-fg dark:border-gruvbox-red-bright

  border-l-4 font-roboto mx-10 my-2 flex items-center
  rounded-sm px-5 py-3 text-base font-bold tracking-wide

  shadow-gruvbox-light dark:shadow-gruvbox-dark
  transition-all duration-200

  hover:bg-gruvbox-red hover:text-gruvbox-light-bg hover:border-gruvbox-red hover:translate-x-1
  dark:hover:bg-gruvbox-red-bright dark:hover:text-gruvbox-bg dark:hover:border-gruvbox-red-bright dark:hover:translate-x-1
`

const Links = () => {
  useEffect(() => {
    document.title = "Links"
  }, [])

  return (
    <div className="min-h-screen w-full bg-gruvbox-light-bg dark:bg-gruvbox-bg font-poppins pb-10 transition-colors duration-500">
      <Navbar />
      <h1 className="mt-10 text-center text-3xl font-bold">Meus Links</h1>
      <p className="text-lg my-4 text-center opacity-80">
        Aqui estão alguns links importantes para me encontrar online.
      </p>
      <div id="links" className="mx-auto max-w-[675px]">
        <h2 className="text-xl mt-8 text-center font-bold">Redes Sociais</h2>

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

        <h2 className="text-xl mt-10 text-center text-gruvbox-light-fg dark:text-gruvbox-fg font-bold">
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

        <h2 className="text-xl mt-10 text-center text-gruvbox-light-fg dark:text-gruvbox-fg font-bold">
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

      <h3 className="text-lg mt-12 mb-8 text-center text-gruvbox-light-fg dark:text-gruvbox-fg opacity-70 font-bold">
        @Talona
      </h3>
    </div>
  )
}

export default Links
