import React from "react";
import Navbar from "../app/components/Navbar/NavbarComponent";

const EquipamentosItem = ({ nome, tipo }) => {
  return (
    <div className="mb-4 rounded-lg bg-gray-800 p-4">
      <h3 className="mb-2 text-xl font-bold text-white">{nome}</h3>
      <p className="text-gray-400">{tipo}</p>
    </div>
  );
};

const EquipamentosList = () => {
  const configuracaoPC = `
   Placa de vídeo: GTX 1060 3 GB 
   Processador: i5 7400 
   Placa mãe: H110
   memórias ram: 2x4GB + 2x16gb
   SSD: 480GB.
   HD: 1.
  `;

  const perifericos = `
   Mouse: Logitech G403 RGB
   Microfone: mic USB
   Headset: KZ ZSN PRO Fone Intra Auricular
   Teclado: Kumara Outemu Brown
   Monitores : 21" LG UltraWide / Acer 27"
   Mousepad: HyperX L
   Webcam: Logitech C920
  `;

  return (
    <>
      <Navbar />
      <div className=" p-8">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Lista de Equipamentos
        </h2>

        <h2 className="mt-8 py-4 text-2xl font-bold text-white">
          Configuração do PC
        </h2>
        <pre className="font-roboto rounded-lg bg-purple-800 p-4 text-white">
          {configuracaoPC}
        </pre>

        <h2 className="font-poppins mt-8 py-4 text-2xl font-bold text-white">
          Periféricos
        </h2>
        <pre className="font-roboto rounded-lg bg-purple-800 p-4 text-white">
          {perifericos}
        </pre>
      </div>
    </>
  );
};

export default EquipamentosList;
