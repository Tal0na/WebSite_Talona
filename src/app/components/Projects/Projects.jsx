import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <section class="text-gray-400 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-purple-r">
              Um pouco da minha experiencia
            </h1>
            <p class="lg:w-1/2 w-full leading-relaxed text-opacity-80">
              Meus trabalhos públicos abrangem diversas áreas, de tecnologia a
              desenvolvimento social. Busco impacto positivo e soluções
              criativas em cada projeto.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-r mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  E-commerce
                </h2>
                <p class="leading-relaxed text-base">
                  Uma plataforma e-commerce inovadora, conectando clientes e
                  produtos exclusivos.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-r mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  Dashboards
                </h2>
                <p class="leading-relaxed text-base">
                  Dashboards intuitivos, transformando dados complexos em
                  insights acionáveis e visuais.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-r mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  Portifolio
                </h2>
                <p class="leading-relaxed text-base">
                  Portfólio reflete uma jornada criativa e técnica única.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-r mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  Blog Pessoal
                </h2>
                <p class="leading-relaxed text-base">
                  Explore um universo pessoal e paixões através de um blog.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-r mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                  Gerenciamento de Tarefas
                </h2>
                <p class="leading-relaxed text-base">
                  Otimize sua produtividade com meu aplicativo de gerenciamento
                  de tarefas.
                </p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-purple-r mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 class="text-lg text-white font-medium title-font mb-2">
                Rede Social para Nicho Específico
                </h2>
                <p class="leading-relaxed text-base">
                Conectando entusiastas em uma comunidade exclusiva através da minha rede social.
                </p>
              </div>
            </div>
          </div>
          <button class="flex mx-auto mt-16 text-white bg-purple-950 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
            Mais
          </button>
        </div>
      </section>
    </>
  );
};

export default Projects;
