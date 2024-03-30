import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../app/components/Navbar/NavbarComponent";

const publicacoesPorTema = [
  {
    tema: "Web Development",
    publicacoes: [
      {
        id: 1,
        titulo: "Resetar o CSS De uma página HTML",
        subtitulo:
          "Como Tirar o Estilo Base do CSS para criar o seu do zero e ter um ambiente clean.",
        link: "/publicacao/1",
      },
      {
        id: 2,
        titulo: "Personalizando o VS Code",
        subtitulo:
          "Personalizando a Experiência: Dicas para Customizar o Visual Studio Code.",
        link: "/publicacao/2",
      },
      {
        id: 6,
        titulo: "Desenvolvimento de Software",
        subtitulo:
          "Discutindo linguagens de programação, frameworks, bibliotecas, técnicas de desenvolvimento de software, metodologias ágeis e melhores práticas de codificação.",
        link: "/publicacao/6",
      },
    ],
  },
  {
    tema: "Tecnologia e Gadgets",
    publicacoes: [
      {
        id: 3,
        titulo: "Tecnologia e Gadgets",
        subtitulo: "Recomendando apenas o que eu comprei e curti.",
        link: "/publicacao/3",
      },
      {
        id: 7,
        titulo: "Gaming",
        subtitulo: "Meus jogos preferidos",
        link: "/publicacao/7",
      },
      {
        id: 9,
        titulo: "Futuro da Tecnologia",
        subtitulo:
          "Explorando especulações sobre o futuro da tecnologia, veículos autônomos, medicina de precisão e outras tendências futuristas.",
        link: "/publicacao/9",
      },
    ],
  },
  {
    tema: "Entretenimento Digital",
    publicacoes: [
      {
        id: 4,
        titulo: "Entretenimento Digital",
        subtitulo:
          "Quais são os conteúdos que mais me interessam na internet",
        link: "/publicacao/4",
      },
      {
        id: 5,
        titulo: "Hobbies e Passatempos",
        subtitulo:
          "Meus hobbies favoritos, Atividade que eu gosto de fazer durante o tempo livre.",
        link: "/publicacao/5",
      },
      {
        id: 8,
        titulo: "Internet e Redes Sociais",
        subtitulo:
          "Análise do impacto da internet e das redes sociais na sociedade, discutindo questões como privacidade online, desinformação, influência digital e cultura da internet.",
        link: "/publicacao/8",
      },
    ],
  },
  {
    tema: "Dicas Úteis",
    publicacoes: [
      {
        id: 10,
        titulo: "Dicas",
        subtitulo:
          "Compartilhando dicas úteis e tutoriais passo a passo sobre como usar software, aplicativos, ferramentas de produtividade e plataformas online.",
        link: "/publicacao/10",
      },
    ],
  },
];

const HomeBlog = () => {
  const [filtroTema, setFiltroTema] = useState("");
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const handleButtonClick = (tema) => {
    setFiltroTema(tema);
  };

  const resetFiltro = () => {
    setFiltroTema("");
  };

  const handleInputChange = (event) => {
    setTermoPesquisa(event.target.value);
  };

  const filtrarPublicacoes = () => {
    let publicacoesFiltradas = publicacoesPorTema;
    if (filtroTema) {
      publicacoesFiltradas = publicacoesPorTema.filter(
        (item) => item.tema === filtroTema
      );
    }
    if (termoPesquisa) {
      publicacoesFiltradas = publicacoesFiltradas.map((item) => ({
        ...item,
        publicacoes: item.publicacoes.filter((publicacao) =>
          publicacao.titulo.toLowerCase().includes(termoPesquisa.toLowerCase())
        ),
      })).filter((item) => item.publicacoes.length > 0);
    }
    return publicacoesFiltradas;
  };

  return (
    <div className="min-h-screen dark:bg-[#121212] bg-[#f9f9f9]">
      <Navbar />
      <h1 className="text-purple-r mt-10 text-center text-3xl font-bold dark:text-purple-300 text-purple-400">
        Talona Blog
      </h1>
      <p className="text-lg my-4 m-10 text-center text-black dark:text-white">
        Bem-vindo ao meu blog, onde você encontra conteúdos inspiradores,
        informativos e cativantes. Explore minhas publicações para descobrir
        histórias fascinantes, dicas úteis e muito mais.
      </p>
      <div className="my-10 text-2xl m-10 text-black dark:text-white">
        Últimas Publicações
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className="px-4 py-2 dark:bg-[#1E1E1E] bg-zinc-100 dark:shadow-zinc-600 shadow-md shadow-zinc-300 transition-transform duration-300 hover:scale-105 dark:border-white text-black dark:text-white dark:hover:text-white hover:text-black"
            onClick={resetFiltro}
          >
            Todas
          </button>
          {publicacoesPorTema.map((item) => (
            <button
              key={item.tema}
              className="px-4 py-2 dark:bg-[#1E1E1E] bg-zinc-100 dark:shadow-zinc-600 shadow-md shadow-zinc-300 transition-transform duration-300 hover:scale-105 dark:border-white text-black dark:text-white dark:hover:text-white hover:text-black"
              onClick={() => handleButtonClick(item.tema)}
            >
              {item.tema}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Pesquisar..."
          className="block w-full p-2 border rounded-md mb-6 text-black dark:text-white"
          value={termoPesquisa}
          onChange={handleInputChange}
        />
        <section>
          {filtrarPublicacoes().map(({ tema, publicacoes }) => (
            <div key={tema}>
              <h2 className="text-xl font-bold mb-4">{tema}</h2>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">
                {publicacoes.map((publicacao) => (
                  <Link key={publicacao.id} href={publicacao.link}>
                   
                      <div className="px-4 w-300 h-300">
                        <div className="relative rounded-lg p-5 pt-8 dark:bg-[#1E1E1E] bg-zinc-100 dark:shadow-zinc-600 shadow-md shadow-zinc-300 transition-transform duration-300 hover:scale-105 dark:border-white text-black dark:text-white dark:hover:text-white hover:text-black">
                          <article className="mb-4">
                            <h3 className="text-xl font-medium">{publicacao.titulo}</h3>
                            <p className="mt-2 text-zinc-700 dark:text-zinc-300">{publicacao.subtitulo}</p>
                          </article>
                        </div>
                      </div>
                 
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default HomeBlog;