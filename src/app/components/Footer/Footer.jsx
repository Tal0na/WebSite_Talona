'use client'
import React, { useState } from "react";
import LogoComponent from "../logo/logotheme";

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
              className="dark:text-sky-700 text-sky-600 ml-1"
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
              href="https://www.instagram.com/talonaa_/"
              target="_blank"
              alt="Link instagram @talonaa_"
              title="Visite meu perfil no instagram"
              aria-label="Link para o perfil @Talonaa_ no instagram"
              aria-describedby="descricao-link-instagram"
              className="ml-3 dark:text-white text-black"
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
