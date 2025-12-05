import React from "react"
import Link from "next/link"
const Projects = () => {
  return (
    <>
      <section className="body-font">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 flex w-full flex-col flex-wrap items-center text-center">
            <h1 className="title-font mb-2 text-2xl font-medium dark:text-rose-500 text-rose-600 sm:text-3xl">
              Um pouco da minha experiencia
            </h1>
            <p className="w-full leading-relaxed text-black text-opacity-80 lg:w-1/2 dark:text-white">
              Meus trabalhos públicos abrangem diversas áreas, de tecnologia a
              desenvolvimento social. Busco impacto positivo e soluções
              criativas em cada projeto.
            </p>
          </div>
          <div className="-m-4 flex flex-wrap ">
            <div className="p-4 md:w-1/2 xl:w-1/3 ">
              <div
                className="rounded-lg border border-rose-600 dark:border-rose-500  border-opacity-75 p-6 
              shadow-md shadow-zinc-300 dark:dark:bg-[#0C0C0C] bg-[#f5f5f5] dark:shadow-zinc-600"
              >
                <div
                  className="text-purple-r mb-4 inline-flex h-10 w-10 items-center justify-center 
                rounded-full dark:bg-rose-600 bg-rose-500"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-6 w-6 text-white dark:text-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-black dark:text-white">
                  E-commerce
                </h2>
                <p className="text-base leading-relaxed text-black dark:text-white">
                  Uma plataforma e-commerce inovadora, conectando clientes e
                  produtos exclusivos.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div
                className="rounded-lg border border-rose-600 dark:border-rose-500  border-opacity-75 p-6 
              shadow-md shadow-zinc-300 dark:dark:bg-[#0C0C0C] bg-[#f5f5f5] dark:shadow-zinc-600"
              >
                <div
                  className="text-purple-r mb-4 inline-flex h-10 w-10 items-center justify-center 
                rounded-full dark:bg-rose-600 bg-rose-500"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-6 w-6 text-white dark:text-black"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-black dark:text-white">
                  Dashboards
                </h2>
                <p className="text-base leading-relaxed text-black dark:text-white">
                  Dashboards intuitivos, transformando dados complexos em
                  insights acionáveis e visuais.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div
                className="rounded-lg border border-rose-600 dark:border-rose-500  border-opacity-75 p-6 
              shadow-md shadow-zinc-300 dark:dark:bg-[#0C0C0C] bg-[#f5f5f5] dark:shadow-zinc-600"
              >
                <div
                  className="text-purple-r mb-4 inline-flex h-10 w-10 items-center justify-center 
                rounded-full dark:bg-rose-600 bg-rose-500"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-6 w-6 text-white dark:text-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-black dark:text-white">
                  Portifolio
                </h2>
                <p className="text-base leading-relaxed text-black dark:text-white">
                  O portfólio é um espelho de uma jornada única, onde a
                  criatividade e a técnica se entrelaçam.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div
                className="rounded-lg border border-rose-600 dark:border-rose-500 border-opacity-75 p-6 
              shadow-md shadow-zinc-300 dark:dark:bg-[#0C0C0C] bg-[#f5f5f5] dark:shadow-zinc-600"
              >
                <div
                  className="text-purple-r mb-4 inline-flex h-10 w-10 items-center justify-center 
                rounded-full dark:bg-rose-600 bg-rose-500"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-6 w-6 text-white dark:text-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-black dark:text-white">
                  Blog Pessoal
                </h2>
                <p className="text-base leading-relaxed text-black dark:text-white">
                  Explore um universo pessoal e apaixone-se por suas paixões
                  através do poder de um blog.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div
                className="rounded-lg border border-rose-600 dark:border-rose-500  border-opacity-75 p-6 
              shadow-md shadow-zinc-300 dark:dark:bg-[#0C0C0C] bg-[#f5f5f5] dark:shadow-zinc-600"
              >
                <div
                  className="text-purple-r mb-4 inline-flex h-10 w-10 items-center justify-center 
                rounded-full dark:bg-rose-600 bg-rose-500"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-6 w-6 text-white dark:text-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-black dark:text-white">
                  Gerenciamento de Tarefas
                </h2>
                <p className="text-base leading-relaxed text-black dark:text-white">
                  Potencialize sua produtividade diária com meu aplicativo de
                  gerenciamento de tarefas.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 xl:w-1/3">
              <div
                className="rounded-lg border border-rose-600 dark:border-rose-500  border-opacity-75 p-6 
              shadow-md shadow-zinc-300 dark:dark:bg-[#0C0C0C] bg-[#f5f5f5] dark:shadow-zinc-600"
              >
                <div
                  className="text-purple-r mb-4 inline-flex h-10 w-10 items-center justify-center 
                rounded-full dark:bg-rose-600 bg-rose-500"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-6 w-6 text-white dark:text-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="title-font mb-2 text-lg font-medium text-black dark:text-white ">
                  Rede Social para Nicho Específico
                </h2>
                <p className="text-base leading-relaxed text-black dark:text-white">
                  Conectando entusiastas em uma comunidade exclusiva através da
                  minha rede social.
                </p>
              </div>
            </div>
          </div>
          <Link href="/Projetos" passHref>
            <button
              className="mx-auto mt-16 flex rounded border-0  
              dark:bg-rose-600 bg-rose-500 hover:bg-rose-600 dark:hover:bg-rose-700  px-8 py-2 text-lg 
            text-white dark:text-black font-semibold focus:outline-none"
            >
              Mais
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Projects
