"use client"
import React, { useState } from "react"
import LogoComponent from "../logo/logotheme"

const Footer = () => {
  return (
    <>
      <footer className="dark:bg-[#121212] bg-[#f9f9f9] border-t border-gray-300 dark:border-zinc-800">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center dark:text-white text-black">
            <LogoComponent />
          </a>
          <p className="text-sm dark:text-white text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-zinc-300 sm:py-2 sm:mt-0 mt-4">
            &copy; 2023 - {new Date().getFullYear()} &middot; Talona Costa —
            <a
              href="https://twitter.com/Talonaa_"
              className="text-blue-500 ml-1"
              target="_blank"
              alt="Link twitter @talonaa_"
              rel="noopener noreferrer"
              title="Visite meu perfil no Twitter"
              aria-label="Link para o perfil @Talonaa_ no Twitter"
              aria-describedby="descricao-link-twitter"
            >
              @Talona
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://twitter.com/Talonaa_"
              target="_blank"
              alt="Link twitter @talonaa_"
              title="Visite meu perfil no Twitter"
              aria-label="Link para o perfil @Talonaa_ no Twitter"
              aria-describedby="descricao-link-twitter"
              className="ml-3 dark:text-white text-black"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              href="https://mastodon.social/@Talona_"
              target="_blank"
              rel="me"
              title="Visite meu perfil no Mastodon"
              aria-label="Link para o perfil Talona no Mastodon"
              aria-describedby="descricao-link-mastodon"
              className="ml-3 mt-1 dark:text-white text-black"
            >
              <svg
                 xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor"
                 stroke="currentColor"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="0"
                 className="w-6 h-6"
                 viewBox="0 0 24 24"
              >
                <path d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a4 4 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522q0-1.288.66-2.046c.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764q.662.757.661 2.046z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/talonaa_/"
              target="_blank"
              alt="Link instagram @talonaa_"
              title="Visite meu perfil no instagram"
              aria-label="Link para o perfil @Talonaa_ no instagram"
              aria-describedby="descricao-link-instagram"
              className="ml-1 dark:text-white text-black"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/talona-costa/"
              target="_blank"
              title="Visite meu perfil no linkedin"
              aria-label="Link para o perfil talona-costa no linkedin"
              aria-describedby="descricao-link-linkedin"
              alt="Link linkedin talona-costa"
              className="ml-3 dark:text-white text-black"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>

            <a
              href="https://github.com/Tal0na"
              target="_blank"
              alt="Link github Talonacosta"
              title="Visite meu perfil no github"
              aria-label="Link para o perfil Talonacosta no lgithub"
              aria-describedby="descricao-link-github"
              className="ml-3 mt-1 dark:text-white text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
           
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer
