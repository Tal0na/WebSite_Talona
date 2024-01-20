import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-white dark:bg-black">
        <div className="flex flex-col sm:pl-8 md:pl-16 lg:pl-32 xl:mt-8 xl:pl-48 ">
          <h3 className="mt-40 h-4 pl-10 text-xl font-medium text-black dark:text-white">
            Hi, My name is!
          </h3>
          <div className="font-poppins pl-10 text-6xl">
            <span className="font-medium text-purple-600">Talona</span>
            <span className="text-purple-600"> Costa</span>
            <span className="font-medium text-purple-600">.</span>
          </div>
          <h2 className="font-poppins pl-12 text-4xl text-black dark:text-white">
            Eu construo coisas para a web
          </h2>
          <p
            className="text-1xl font-roboto text-paragraph-bg pl-12 leading-relaxed
         text-zinc-600 dark:text-zinc-300"
          >
            Sou desenvolvedor web designer apaixonado por combinar <br />
            criatividade e tecnologia para criar experiências digitais <br />
            impactantes e funcionais.
          </p>

          <div className="flex justify-start py-4 pb-32 pl-12">
            <Link href="/Blog" passHref>
              <div
                className="button h-16 w-40 cursor-pointer select-none rounded-lg border-b-[1px]
          border-purple-400 bg-purple-700
           transition-all duration-150
          hover:bg-purple-600 active:translate-y-4
          active:border-b-[0px] active:shadow-none dark:shadow-zinc-600 shadow-md shadow-zinc-300"
              >
                <span className="font-poppins flex h-full items-center justify-center text-lg font-medium 
                text-white dark:text-black">
                  Meu blog!
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
