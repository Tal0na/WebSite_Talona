import React from "react";
import styles from "../pages/styles.module.css";
import Navbar from "../app/components/Navbar/NavbarComponent";

const Links = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-purple-r mt-10 text-center text-3xl text-purple-600">
        Meus Links
      </h1>
      <p className="text-1xl my-4 text-center text-zinc-100  ">
        Aqui estão alguns links importantes para me encontrar online.
      </p>
      <div id="links" className="mx-auto max-w-[675px]">
        <a
          className="link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 
          block transform rounded-lg border-2 bg-transparent p-2 text-center text-lg transition-transform 
          duration-300 hover:scale-105 hover:bg-zinc-800"
          href="https://github.com/Talonacosta"
          target="_blank"
        >
          Github
        </a>
        <a
          className="link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 
          block transform rounded-lg border-2 bg-transparent p-2 text-center text-lg 
          transition-transform duration-300 hover:scale-105 hover:bg-blue-600"
          href="https://www.linkedin.com/in/talona-costa-b83054295/"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          className="link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 
          block transform rounded-lg border-2 bg-transparent p-2 text-center text-lg 
          transition-transform duration-300 hover:scale-105 hover:bg-blue-500"
          href="https://twitter.com/Talonaa_"
          target="_blank"
        >
          Twitter / X
        </a>
        <a
          className={`link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 
        block transform rounded-lg border-2 bg-black p-2 text-center text-lg 
        transition-transform duration-300 hover:scale-105 ${styles.instagram}`}
          href="https://www.instagram.com/talonaa_/"
          target="_blank"
        >
          Instagram
        </a>
        <a
          className=" link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 
          block transform rounded-lg border-2 bg-transparent p-2 text-center text-lg 
          transition-transform duration-300 hover:scale-105 hover:bg-blue-400"
          id="discord-link"
          onClick={() => copyToClipboard("talona_")}
          href="#"
        >
          Discord
        </a>
        <a
          className="link rounded-10  tap-highlight-transparent font-roboto mx-10 my-3 
          block transform rounded-lg border-2 bg-transparent p-2 text-center text-lg transition-transform 
          duration-300 hover:scale-105 hover:bg-green-600 hover:text-black"
          href="https://open.spotify.com/user/12184323470?si=ae5fd5e22a9141b7&nd=1"
          target="_blank"
        >
          Spotify
        </a>
        <a
          className="link rounded-10 text-decoration-none tap-highlight-transparent 
          font-roboto mx-10 my-3 block transform rounded-lg border-2 bg-transparent p-2 
          text-center text-lg 
          transition-transform duration-300 hover:scale-105 hover:bg-red-600"
          href="mailto:talonacostaa@gmail.com"
          target="_blank"
        >
          Gmail
        </a>
        <a
          className="link rounded-10 text-decoration-none tap-highlight-transparent font-roboto mx-10 my-3 
          block transform rounded-lg border-2 bg-transparent p-2 text-center text-lg 
          transition-transform duration-300 hover:scale-105 hover:bg-purple-700"
          href="https://www.twitch.tv/talona_"
          target="_blank"
        >
          Twitch
        </a>
      </div>

      <div id="hashtag" className="my-4 text-center text-2xl font-normal">
        #Flower❤
      </div>
    </div>
  );
};
export default Links;
