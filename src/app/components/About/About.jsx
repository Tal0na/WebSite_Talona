"use client";

import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="bg-custom flex flex-col">
        <h3 className="mt-16 h-6 pl-10 text-2xl">Oi, meu nome é</h3>
        <h1 className="font-poppins pl-10 text-6xl font-medium text-purple-r">
          Tales Costa.
        </h1>
        <h2 className="font-poppins left pl-12 text-4xl">
          Eu construo coisas para a web
        </h2>
        <p className="text-1xl pl-12 font-roboto leading-relaxed text-paragraph-bg">
          Sou um desenvolvedor web designer apaixonado por combinar criatividade
          e tecnologia para criar experiências digitais impactantes e
          funcionais.
        </p>

        <div className="flex justify-start pl-12">
          <a
            href="https://portifolio-talona.vercel.app/"
            className="my-4 max-w-screen-md rounded bg-purple-r px-8 py-4 text-center text-xl 
            font-medium 
    text-black transition duration-200 hover:bg-purple-600 active:bg-purple-700"
          >
            Meu Portifolio!
          </a>
        </div>
        <img
          src="/svgs/Union.svg"
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
