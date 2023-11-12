import React from "react";

import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <h3 className="text-2xl h-6 pl-10 mt-16">Oi, meu nome é</h3>
        <h1 className="font-poppins text-6xl font-medium text-purple-r pl-10">
          Tales Costa.
        </h1>
        <h2 className="font-poppins text-4xl left pl-12">
          Eu construo coisas para a web
        </h2>
        <p className="font-roboto text-1xl text-paragraph-bg pl-12">
          Sou um desenvolvedor web designer apaixonado por combinar criatividade
          e tecnologia para criar experiências digitais impactantes e
          funcionais.
        </p>

        <Link
          href="/Sobre"
          passHref
          className="border-solid border-[#9400ff] max-w-[350px] 
          mx-auto my-3 items-start border-2 rounded-lg block text-center 
          text-2xl font-poppins text-[#9400ff] ml-12 mr-8 mt-4 mb-3"
        >
          Conheça mais sobre mim!
        </Link>
        <img
          src="/img/Union.svg"
          alt="rosa"
          className="self-end"
          width={200}
          height={200}
        />
      </div>
    </>
  );
};

export default About;
