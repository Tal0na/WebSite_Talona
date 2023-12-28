"use client";
import styles from "../pages/styles.module.css";
import Navbar from "../app/components/Navbar/NavbarComponent";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Links = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [linkText, setLinkText] = useState("Discord");
  const [copiedMessage, setCopiedMessage] = useState(
    "Copiado para a área de transferência!",
  );

  useEffect(() => {
    const handleCopyToClipboard = () => {
      const textToCopy = "talona_";
      const tempInput = document.createElement("textarea");
      tempInput.value = textToCopy;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);

      console.log(`Copied to clipboard: ${textToCopy}`);
      setIsCopied(true);
      setLinkText("Copiado para a área de transferência: talona_");
      setCopiedMessage("");

      setTimeout(() => {
        setIsCopied(false);
        setLinkText("Discord");
        setCopiedMessage("Copiado para a área de transferência!");
      }, 3000);
    };

    const discordLink = document.getElementById("discord-link");
    if (discordLink) {
      discordLink.addEventListener("click", handleCopyToClipboard);
    }

    return () => {
      if (discordLink) {
        discordLink.removeEventListener("click", handleCopyToClipboard);
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      <Navbar />
      <h1 className="text-purple-r mt-10 text-center text-3xl text-purple-600">
        Meus Links
      </h1>
      <p className="text-1xl my-4 text-center text-black dark:text-white  ">
        Aqui estão alguns links importantes para me encontrar online.
      </p>
      <div id="links" className="mx-auto max-w-[675px]">
        <Link
          className="link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 
          block transform rounded-lg border-2 border-black p-2 text-center text-lg text-black transition-transform duration-300 
          hover:scale-105 hover:bg-blue-500 hover:text-white dark:border-white dark:text-white dark:hover:text-white"
          href="https://twitter.com/Talonaa_"
          target="_blank"
        >
          Twitter / X
        </Link>
        <Link
          className="link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 
          block transform rounded-lg border-2 border-black p-2 text-center text-lg text-black transition-transform duration-300 
          hover:scale-105 hover:bg-blue-600 hover:text-white dark:border-white dark:text-white dark:hover:text-white"
          href="https://www.linkedin.com/in/talona-costa/"
          target="_blank"
        >
          Linkedin
        </Link>
        <Link
          className="link rounded-10 text-decoration-none tap-highlight-transparent  font-roboto mx-10 my-3 
          block transform rounded-lg border-2 border-black p-2 text-center text-lg text-black transition-transform duration-300 hover:scale-105 
          hover:bg-zinc-600 hover:text-white dark:border-white dark:text-white dark:hover:bg-zinc-800 dark:hover:text-white"
          href="https://github.com/Talonacosta"
          target="_blank"
        >
          Github
        </Link>

        <Link
          className="link rounded-10 text-decoration-none tap-highlight-transparent 
          font-roboto mx-10 my-3 block transform rounded-lg border-2 border-black bg-transparent p-2 
          text-center text-lg text-black transition-transform duration-300
          hover:scale-105 hover:bg-red-600 hover:text-white dark:border-white dark:text-white dark:hover:text-white"
          href="mailto:talonacostaa@gmail.com"
          target="_blank"
        >
          Gmail
        </Link>
        <div>
          <a
            className="link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 
        block transform rounded-lg border-2 border-black p-2 text-center text-lg text-black transition-transform duration-300 
        hover:scale-105 hover:bg-blue-400 hover:text-white dark:border-white dark:text-white dark:hover:text-white"
            id="discord-link"
          >
            {linkText}
          </a>

          {isCopied && <p>{copiedMessage}</p>}
        </div>
        <Link
          className="link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 
          block transform rounded-lg border-2 border-black p-2 text-center text-lg text-black  transition-transform duration-300 
          hover:scale-105 hover:bg-purple-700 hover:text-white dark:border-white dark:text-white dark:hover:text-white"
          href="https://www.twitch.tv/talona_"
          target="_blank"
        >
          Twitch
        </Link>
        <Link
          className="link rounded-10  tap-highlight-transparent font-roboto mx-10 my-3 
          block transform rounded-lg border-2 border-black p-2 text-center text-lg text-black transition-transform duration-300 hover:scale-105 
          hover:bg-green-600 hover:text-white dark:border-white dark:text-white dark:hover:text-white "
          href="https://open.spotify.com/user/12184323470?si=ae5fd5e22a9141b7&nd=1"
          target="_blank"
        >
          Spotify
        </Link>
        <Link
          className={`link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 
        block transform rounded-lg border-2 border-black p-2 text-center  text-lg text-black transition-transform duration-300 
        hover:scale-105 hover:text-white dark:border-white dark:text-white dark:hover:text-white ${styles.instagram}`}
          href="https://www.instagram.com/talonaa_/"
          target="_blank"
        >
          Instagram
        </Link>
      </div>
    </div>
  );
};
export default Links;
