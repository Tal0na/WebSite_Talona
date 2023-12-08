import React from "react";


const About = () => {
  return (
    <>
      <div className="bg-custom flex flex-col sm:pl-8  md:pl-16 lg:pl-32  xl:pl-48 xl:mt-8">
        <h3 className="mt-16 h-6 pl-10 text-xl text-yellow-400">
          Oi, Meu Nome é !
        </h3>
        <h1 className="font-poppins text-purple-r pl-10 text-6xl text-purple-600">
          <span className="font-medium">Talona</span> <span>Costa</span>
          <span className="font-medium">.</span>
        </h1>
        <h2 className="font-poppins pl-12 text-4xl ">
          Eu construo coisas para a web
        </h2>
        <p className="text-1xl font-roboto text-paragraph-bg pl-12 leading-relaxed text-zinc-300">
          Sou um desenvolvedor web designer apaixonado por combinar <br />
          criatividade e tecnologia para criar experiências digitais <br />
          impactantes e funcionais.
        </p>

        <div className="flex justify-start pb-8 pl-12">
          <a
            target="_blank"
            href="https://portifolio-talona.vercel.app/"
            className="bg-yellow-500 my-4 rounded-md px-6 py-3 text-center text-lg font-medium 
            text-black
            transition duration-300 hover:bg-purple-600 focus:border-purple-300 focus:outline-none focus:ring active:bg-purple-700 "
          >
            Meu Portfólio!
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
