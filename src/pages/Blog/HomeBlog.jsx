import React from "react"
import { useEffect } from "react"
import Link from "next/link"
import Navbar from "../../app/components/Navbar/NavbarComponent"

const HomeBlog = () => {
  useEffect(() => {
    document.title = "Blog"
  }, [])
  const publicacoes = [
    {
      titulo: "Resetar o CSS De uma pagina HTML",
      subtitulo:
        "Como Tirar o Estilo Base do css para criar o seu do 0 para ter um ambiente clean.",
      link: "/publicacao/1",
    },
    {
      titulo: "Personalizando o VS Code",
      subtitulo:
        "Personalizando a Experiência: Dicas para Customizar o Visual Studio Code",
      link: "/publicacao/2",
    },
    {
      titulo: "Título da Publicação 3",
      subtitulo: "Subtítulo da Publicação 3",
      link: "/publicacao/3",
    },
    {
      titulo: "Título da Publicação 4",
      subtitulo: "Subtítulo da Publicação 4",
      link: "/publicacao/4",
    },
    {
      titulo: "Título da Publicação 5",
      subtitulo: "Subtítulo da Publicação 5",
      link: "/publicacao/4",
    },
    {
      titulo: "Título da Publicação 6",
      subtitulo: "Subtítulo da Publicação 6",
      link: "/publicacao/4",
    },
  ]

  return (
    <div className="min-h-screen dark:bg-[#121212] bg-[#f9f9f9]">
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-purple-r mt-10 text-center text-3xl font-bold dark:text-purple-300 text-purple-400">
          Talona Blog
        </h1>
        <p className="text-lg my-4 text-center text-black dark:text-white">
          Bem-vindo ao meu blog, onde você encontra conteúdos inspiradores,
          informativos e cativantes. Explore minhas publicações para descobrir
          histórias fascinantes, dicas úteis e muito mais.
        </p>

        <section>
          <div className="my-10 text-2xl  text-black dark:text-white">
            Últimas Publicações
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3 ">
            {publicacoes.map((publicacao, index) => (
              <Link key={index} href={publicacao.link}>
                <div className="px-4 w-300 h-300">
                  <div
                    className="relative rounded-lg  p-5 pt-8 
                     dark:bg-[#1E1E1E] bg-zinc-100  dark:shadow-zinc-600 shadow-md shadow-zinc-300 transition-transform duration-300 hover:scale-105 
          hover:text-white dark:border-white text-black dark:text-white  dark:hover:text-white"
                  >
                    <article className="mb-4 ">
                      <h3 className="text-xl font-bold">{publicacao.titulo}</h3>
                      <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                        {publicacao.subtitulo}
                      </p>
                    </article>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default HomeBlog
