import React from "react";
import Navbar from "../app/components/Navbar/NavbarComponent";

const Projetos = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-purple-400 font-poppis text-center mt-10 mb-20">
        Aqui estão meu projetos{" "}
      </h1>

      <div className="grid grid-cols-8 grid-rows-7 gap-3 p-4">
        <div className="col-span-2 bg-purple-500 text-center rounded-xl row-span-2 h-32 text-white">
          1
        </div>
        <div className="col-span-2 bg-purple-400 text-center rounded-xl row-span-2 col-start-3 text-white">
          2
        </div>
        <div className="row-span-2 bg-purple-300 text-center rounded-xl col-start-5 text-white">
          3
        </div>
        <div className="row-span-2 bg-purple-500 text-center rounded-xl col-start-6 text-white">
          4
        </div>
        <div className="col-span-2 bg-purple-300 text-center rounded-xl row-span-2 col-start-7 text-white">
          5
        </div>

        <div className="col-span-2 bg-purple-500 text-center rounded-xl row-span-2 row-start-3 h-32 text-white">
          6
        </div>
        <div className="col-span-4 bg-purple-600 text-center rounded-xl row-span-3 col-start-3 row-start-3 text-white">
          7
        </div>
        <div className="col-span-2 bg-purple-300 text-center rounded-xl col-start-1 row-start-5 h-32 text-white">
          8
        </div>
        <div className="col-span-2 bg-purple-400 text-center rounded-xl row-span-2 col-start-7 row-start-3 text-white">
          9
        </div>
        <div className="col-start-7 bg-purple-500 text-center rounded-xl row-start-5 h-32 text-white">
          10
        </div>
        <div className="col-start-8 bg-purple-400 text-center rounded-xl row-start-5 text-white">
          11
        </div>

        <div className="col-span-2 bg-purple-500 rounded-xl row-span-2 row-start-6 h-32 text-white">
          <div className="text-center ">12</div>
        </div>
        <div className="row-span-2 bg-purple-400 text-center rounded-xl col-start-3 row-start-6 text-white">
          13
        </div>
        <div className="col-span-3 bg-purple-300 text-center rounded-xl row-span-2 col-start-4 row-start-6 text-white">
          14
        </div>
        <div className="col-span-2 bg-purple-400 text-center rounded-xl row-span-2 col-start-7 row-start-6 text-white">
          15
        </div>
      </div>
    </div>
  );
};

export default Projetos;
