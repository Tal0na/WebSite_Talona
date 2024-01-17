import React from "react";
import Link from "next/link";
import Navbar from "../../app/components/Navbar/NavbarComponent";

const HomeBlog = () => {
  const publicacoes = [
    {
      titulo: "Título da Publicação 1",
      subtitulo: "Subtítulo da Publicação 1",
      link: "/publicacao/1", // Adicione o link desejado aqui
    },
    {
      titulo: "Título da Publicação 2",
      subtitulo: "Subtítulo da Publicação 2",
      link: "/publicacao/2", // Adicione o link desejado aqui
    },
    {
      titulo: "Título da Publicação 3",
      subtitulo: "Subtítulo da Publicação 3",
      link: "/publicacao/3", // Adicione o link desejado aqui
    },
    {
      titulo: "Título da Publicação 4",
      subtitulo: "Subtítulo da Publicação 4",
      link: "/publicacao/4", // Adicione o link desejado aqui
    },
    {
      titulo: "Título da Publicação 5",
      subtitulo: "Subtítulo da Publicação 5",
      link: "/publicacao/4", // Adicione o link desejado aqui
    },
    {
      titulo: "Título da Publicação 6",
      subtitulo: "Subtítulo da Publicação 6",
      link: "/publicacao/4", // Adicione o link desejado aqui
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <main className="container mx-auto p-6">
        <h1 className="text-purple-r mt-10 text-center text-3xl font-bold text-purple-600">
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
                <div className="px-5 text-black dark:text-white">
                  <div className="relative rounded-lg bg-zinc-200 p-5 pt-8 dark:bg-zinc-900 dark:shadow-zinc-700 shadow-md shadow-zinc-300">
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
  );
};

export default HomeBlog;
