import React from "react";
import Navbar from "../app/components/Navbar/NavbarComponent";

const PeripheralBlock = ({ name, description }) => (
  <div className="rounded-10 text-decoration-none tap-highlight-transparent  font-roboto 
  block transform rounded-lg border-2 border-black p-2 text-center text-lg text-black transition-transform duration-300 hover:scale-105 
  hover:text-blac dark:border-white dark:text-white">
    <h2 className="text-lg font-semibold mb-2 hover:dark:text-white ">{name}</h2>
    <p>{description}</p>
  </div>
);

const ConfigBlock = ({ name, value }) => (
  <div className="rounded-10 text-decoration-none tap-highlight-transparent  font-roboto 
  block transform rounded-lg border-2 border-black p-2 text-center text-lg text-black transition-transform duration-300 hover:scale-105 
  hover:text-blac dark:border-white dark:text-white">
    <h2 className="text-lg font-semibold mb-2 hover:dark:text-white ">{name}</h2>
    <p>{value}</p>
  </div>
);

const EquipamentosList = () => {
  const peripherals = [
    { name: 'Mouse', description: 'Logitech G403 RGB' },
    { name: 'Microfone', description: 'Mic USB' },
    { name: 'Headset', description: 'KZ ZSN PRO Fone Intra Auricular' },
    { name: 'Teclado', description: 'Kumara Outemu Brown' },
    { name: 'Monitores', description: '21" LG UltraWide / Acer 27"' },
    { name: 'Mousepad', description: 'HyperX L' },
    { name: 'Webcam', description: 'Logitech C920' },
  ];

  const configs = [
    { name: 'Placa de vídeo', value: 'GTX 1060 3 GB' },
    { name: 'Processador', value: 'i5 7400' },
    { name: 'Placa mãe', value: 'H110' },
    { name: 'Memórias RAM', value: '2x4GB + 2x16GB' },
    { name: 'SSD', value: '480GB' },
    { name: 'HD', value: '1TB' },
  ];

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      <Navbar />
      <div className="container mx-auto p-4 my-8">
        <h1 className="text-3xl text-purple-600 font-semibold my-6">Configurações do PC</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {configs.map((config, index) => (
            <ConfigBlock key={index} {...config} />
          ))}
        </div>

        <h1 className="text-3xl text-purple-600 font-semibold my-6">Periféricos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {peripherals.map((peripheral, index) => (
            <PeripheralBlock key={index} {...peripheral} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipamentosList;