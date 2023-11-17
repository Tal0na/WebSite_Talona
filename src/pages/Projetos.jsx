import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faCertificate,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "../app/components/Navbar/NavbarComponent";

const Projetos = () => {
  return (
    <>
      <Navbar />

      <h1 className="text-3xl text-purple-400 font-poppins text-center mt-10 mb-20">
        Aqui estão alguns dos meus projetos
      </h1>

      <div className="grid grid-cols-8 grid-rows-7 gap-4 p-4">
        {/* Item 1 */}
        <a
          href="https://github.com/Talonacosta/CoffeComCodigo"
          target="_blank"
          className="col-span-2 bg-[#e9d691] text-center rounded-xl row-span-2 h-32 text-[#4e3629]
  flex flex-col items-center justify-center shadow-md transition-transform duration-300 transform hover:scale-105 border-2 border-[#4e3629]"
        >
          <span className="text-lg font-bold">Coffe Com Codigo</span>
          <p className="text-sm mt-2">
            Projetos Leves e Divertidos para Acompanhar Seu Café Matinal ☕️
          </p>
        </a>

        {/* Item 2 */}
        <a
          href=""
          target="_blank"
          className="col-span-2 bg-purple-400 text-center rounded-xl row-span-2 col-start-3 text-white 
          flex items-center justify-center shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          <span className="text-lg font-bold">2</span>
        </a>

        {/* Item 3 */}
        <a
          target="_blank"
          href=""
          className="row-span-2 bg-purple-300 text-center rounded-xl col-start-5 text-white 
          flex items-center justify-center shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          <span className="text-lg font-bold">3</span>
        </a>

        {/* Item 4 */}
        <a
          target="_blank"
          href=""
          className="row-span-2 bg-purple-500 text-center rounded-xl col-start-6 text-white 
          flex items-center justify-center shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          <span className="text-lg font-bold">4</span>
        </a>

        {/* Item 5 */}
        <a
          target="_blank"
          href=""
          className="col-span-2 bg-purple-300 text-center rounded-xl row-span-2 col-start-7 text-white 
          flex items-center justify-center shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faCertificate} className="text-3xl mb-2" />
          <span className="text-lg font-bold mt-2">
            Certificação e ou Conquista
          </span>
        </a>

        {/* Item 6 */}
        <a
          href=""
          target="_blank"
          className="col-span-2 bg-purple-500 text-center rounded-xl row-span-2 row-start-3 h-32 text-white 
          flex items-center justify-center shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          <span className="text-lg font-bold">6</span>
        </a>

        {/* Item 7 */}
        <a
          href="https://github.com/Talonacosta?tab=repositories"
          target="_blank"
          className="col-span-4 bg-purple-600 text-center rounded-xl row-span-3 col-start-3 row-start-3 text-white 
        flex flex-col items-center justify-center shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faGithub} className="text-4xl mb-2" />
          <span className="text-lg font-bold">GitHub Repository</span>
          <p className="text-lg mt-1">Todos os meus projetos do Github</p>
        </a>

        {/* Item 8 */}
        <a
          href=""
          target="_blank"
          className="col-span-2 bg-[#276dae] text-center rounded-xl col-start-1 row-start-5 h-32 text-white 
          flex items-center justify-center shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faTableColumns} className="text-4xl mb-2" />

          <span className="text-lg font-bold mt-2">
            Habilidades e Tecnologias
          </span>

          <p className="text-sm mt-1">
            Isso inclui HTML, CSS, JavaScript, React, Node.js, etc.
          </p>
        </a>

        {/* Item 9 */}
        <a
          href=""
          target="_blank"
          className="col-span-2 bg-yellow-500 text-center rounded-xl row-span-2 col-start-7 row-start-3 
          text-white flex items-center justify-center shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faTools} className="text-3xl mb-2" />
          <span className="text-lg font-bold mt-2">Ferramentas e Recursos</span>
          <p className="text-sm mt-1">
            Descubra minhas ferramentas e recursos favoritos que uso.
          </p>
        </a>

        {/* Item 10 */}
        <a
          href=""
          target="_blank"
          className="col-start-7 bg-purple-500 text-center rounded-xl row-start-5 h-32 text-white flex items-center 
          justify-center shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          <span className="text-lg font-bold">10</span>
        </a>

        {/* Item 11 */}
        <a
          href=""
          target="_blank"
          className="col-start-8 bg-purple-400 text-center rounded-xl row-start-5 text-white flex items-center 
          justify-center shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          <span className="text-lg font-bold">11</span>
        </a>

        {/* Item 12 */}
        <a
          href=""
          target="_blank"
          className="col-span-2 bg-purple-900 rounded-xl row-span-2 row-start-6 h-32 text-white flex items-center 
          justify-center shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          <spam className="text-lg font-bold mt-2">
            Pagina com os meus links
          </spam>

          <p className="text-sm mt-1">meus projetos, redes sociais e mais.</p>
        </a>

        {/* Item 13 */}
        <a
          href=""
          target="_blank"
          className="row-span-2 bg-purple-400 text-center rounded-xl col-start-3 row-start-6 text-white 
          flex items-center justify-center shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          <span className="text-lg font-bold">13</span>
        </a>

        {/* Item 14 */}
        <a
          href=""
          target="_blank"
          className="col-span-3 bg-[#1DB954] text-center rounded-xl row-span-2 col-start-4 row-start-6 text-white 
  flex flex-col items-center justify-center shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faSpotify} className="text-3xl mb-2" />
          <span className="text-lg font-bold mt-2">Gostos Musicais</span>
          <p className="text-sm mt-1">Como é bom escutar músicas.</p>
        </a>

        {/* Item 15 */}
        <a
          href=""
          target="_blank"
          className="col-span-2 bg-red-500 text-center rounded-xl row-span-2 col-start-7 row-start-6 
          flex items-center justify-center shadow-md transition-transform duration-300 transform hover:scale-105"
        >
          <FontAwesomeIcon icon={faYoutube} className="text-3xl mb-2" />
          <span className="text-xl font-bold mt-2">
            Vídeos para serem eternizados
          </span>
          <p className="text-sm mt-1">
            destacando o conteúdo de alguns canais.
          </p>
        </a>
      </div>
    </>
  );
};

export default Projetos;
