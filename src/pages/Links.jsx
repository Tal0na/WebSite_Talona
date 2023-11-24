import React from "react";
import Navbar from "../app/components/Navbar/NavbarComponent";

export default function Links() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-purple-r my-4 text-center">Meus Links</h1>
      <p className="text-1xl text-zinc-100 my-4 text-center  ">Aqui estão alguns links importantes para me encontrar online.</p>
      <div id="links" className="max-w-[675px] mx-auto">
        <a
          className="link border-2 rounded-lg rounded-10 text-lg font-roboto text-center block mx-10 my-3 p-2 text-decoration-none tap-highlight-transparent bg-transparent transition-transform duration-300 transform hover:scale-105"
          href="https://github.com/Talonacosta"
          target="_blank"
        >
          Github
        </a>
        <a
          className="link border-2 rounded-lg rounded-10 text-lg font-roboto text-center block mx-10 my-3 p-2 text-decoration-none tap-highlight-transparent transition-transform duration-300 transform hover:scale-105 bg-transparent"
          href="https://www.linkedin.com/in/talona-costa-b83054295/"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          className="link border-2 rounded-lg rounded-10 text-lg font-roboto text-center block mx-10 my-3 p-2 text-decoration-none tap-highlight-transparent transition-transform duration-300 transform hover:scale-105 bg-transparent"
          href="https://twitter.com/Talonaa_"
          target="_blank"
        >
          Twitter
        </a>
        <a
          className="link border-2 rounded-lg rounded-10 text-lg font-roboto text-center block mx-10 my-3 p-2 text-decoration-none tap-highlight-transparent transition-transform duration-300 transform hover:scale-105 bg-transparent"
          href="https://www.instagram.com/talonaa_/"
          target="_blank"
        >
          Instagram
        </a>
        <a
          className="link border-2 rounded-lg rounded-10 text-lg font-roboto text-center block mx-10 my-3 p-2 text-decoration-none tap-highlight-transparent transition-transform duration-300 transform hover:scale-105 bg-transparent"
          id="discord-link"
          onClick={() => copyToClipboard("talona_")}
          href="#"
        >
          Discord
        </a>
        <a
          className="link border-2 rounded-lg rounded-10 text-lg font-roboto text-center block mx-10 my-3 p-2 text-decoration-none tap-highlight-transparent transition-transform duration-300 transform hover:scale-105 bg-transparent"
          href="https://open.spotify.com/user/12184323470?si=ae5fd5e22a9141b7&nd=1"
          target="_blank"
        >
          Spotify
        </a>
        <a
          className="link border-2 rounded-lg rounded-10 text-lg font-roboto text-center block mx-10 my-3 p-2 text-decoration-none tap-highlight-transparent transition-transform duration-300 transform hover:scale-105 bg-transparent"
          href="mailto:talonacostaa@gmail.com"
          target="_blank"
        >
          Gmail
        </a>
        <a
          className="link border-2 rounded-lg rounded-10 text-lg font-roboto text-center block mx-10 my-3 p-2 text-decoration-none tap-highlight-transparent transition-transform duration-300 transform hover:scale-105 bg-transparent"
          href="https://www.twitch.tv/talona_"
          target="_blank"
        >
          Twitch
        </a>
      </div>

      <div id="hashtag" className="text-2xl font-normal text-center my-4">
        #Flower❤
      </div>
    </div>
  );
}
