import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-custom flex flex-col sm:pl-8  md:pl-16 lg:pl-32  xl:mt-8 xl:pl-48">
        <h3 className="mt-40 h-6 pl-10 text-xl text-white">
          Oi, Meu Nome é!
        </h3>
        <div className="font-poppins pl-10 text-6xl">
          <span className="font-medium text-purple-600">Talona</span>
          <span className="text-purple-600">Costa</span>
          <span className="font-medium text-purple-600">.</span>
        </div>
        <h2 className="font-poppins pl-12 text-4xl ">
          Eu construo coisas para a web
        </h2>
        <p className="text-1xl font-roboto text-paragraph-bg pl-12 leading-relaxed text-zinc-300">
          Sou um desenvolvedor web designer apaixonado por combinar <br />
          criatividade e tecnologia para criar experiências digitais <br />
          impactantes e funcionais.
        </p>

        <div className="flex justify-start pb-32 pl-12">
          <a
            target="_blank"
            href="https://portifolio-talona.vercel.app/"
            className="my-4 rounded-md bg-purple-700 px-6 py-3 text-center text-lg font-medium 
            text-black
            transition duration-300 hover:bg-purple-600"
          >
            Meu Portfólio!
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
