import React from "react"
import { useEffect } from "react"
import Navbar from "../app/components/Navbar/NavbarComponent"

const PeripheralBlock = ({ name, description }) => (
  <div
    className=" dark:bg-[#1e1e1e] bg-[#f3f3f3] rounded-10 text-decoration-none tap-highlight-transparent  font-roboto 
  block transform rounded-lg border border-black border-opacity-75 p-2 text-center text-lg text-black transition-transform 
  duration-300 hover:scale-105 
  hover:text-blac dark:border-white dark:text-white"
  >
    <h2 className="text-lg font-semibold mb-2 hover:dark:text-white ">
      {name}
    </h2>
    <p>{description}</p>
  </div>
)

const ConfigBlock = ({ name, value }) => (
  <div
    className=" dark:bg-[#1e1e1e] bg-[#f3f3f3] rounded-10 text-decoration-none tap-highlight-transparent  font-roboto 
  block transform rounded-lg border border-black border-opacity-75 p-2 text-center text-lg text-black transition-transform 
  duration-300 hover:scale-105 
  hover:text-blac dark:border-white dark:text-white"
  >
    <h2 className="text-lg font-semibold mb-2 hover:dark:text-white ">
      {name}
    </h2>
    <p>{value}</p>
  </div>
)

const ServidorBlock = ({ name, value }) => (
  <div
    className="dark:bg-[#1e1e1e] bg-[#f3f3f3] rounded-10 text-decoration-none tap-highlight-transparent  font-roboto 
  block transform rounded-lg border border-black border-opacity-75 p-2 text-center text-lg text-black transition-transform 
  duration-300 hover:scale-105 
  hover:text-blac dark:border-white dark:text-white"
  >
    <h2 className="text-lg font-semibold mb-2 hover:dark:text-white">{name}</h2>
    <p>{value}</p>
  </div>
)

const OldBlock = ({ name, value }) => (
  <div
    className="dark:bg-[#1e1e1e] bg-[#f3f3f3] rounded-10 text-decoration-none tap-highlight-transparent  font-roboto 
  block transform rounded-lg border border-black border-opacity-75 p-2 text-center text-lg text-black transition-transform 
  duration-300 hover:scale-105 
  hover:text-blac dark:border-white dark:text-white"
  >
    <h2 className="text-lg font-semibold mb-2 hover:dark:text-white">{name}</h2>
    <p>{value}</p>
  </div>
)

const EquipamentosList = () => {
  useEffect(() => {
    document.title = "Equipamentos"
  }, [])
  const peripherals = [
    { name: "Celular", description: "Xiaomi 13 Lite" },
    { name: "Fone TWS", description: "MOONDROP SPACE TRAVEL" },
    { name: "Mouse", description: "vgn dragonfly f1 pro max" },
    { name: "Microfone", description: "Mic USB" },
    { name: "Headset", description: "KZ ZSN PRO Fone Intra Auricular" },
    { name: "Teclado", description: "Kumara Outemu Brown" },
    { name: "Monitores", description: '21" LG UltraWide / 27 2.5k 144hz"' },
    { name: "Barra de som", description: "LG Sk1d" },
    { name: "Mousepad", description: "HyperX L" },
    { name: "Webcam", description: "Logitech C920" },
  ]

  const configs = [
    { name: "Placa de vídeo", value: "GTX 1060 3 GB" },
    { name: "Processador", value: "Ryzen7 5700x3d" },
    { name: "Placa mãe", value: "MSI B550M Pro-VDH WiFi" },
    { name: "Memórias RAM", value: "2x16GB 2666mhz" },
    { name: "CPU cooler", value: "Hyper H410R White Edition" },
    { name: "Fonte", value: "MSI MAG A650BN" },
    { name: "Gabinete", value: "Mancer Goblin Branco" },
    { name: "SSD", value: "480GB" },
    { name: "SSD nvme", value: "500GB" },
    { name: "HD", value: "1TB" },
  ]

  const Servidor = [
    { name: "Processador", value: "i5 7400" },
    { name: "Placa mãe", value: "Azus H110M-CS/BR" },
    { name: "Memórias RAM", value: "2x4GB 2400mhz" },
    { name: "Fonte", value: "kcas 500w" },
    { name: "HD", value: "100GB" },
  ]

  const Old = [
    { name: "Celular", value: "Xiaomi MI A2" },
    { name: "Mouse", value: "Logitec G403" },
    { name: "Processador", value: "i5 2400" },
    { name: "Placa mãe", value: "Isync H61 CYB-20-GH61" },
    { name: "Memórias RAM", value: "1x8GB ddr3 1333mhz" },
  ]

  return (
    <div className="min-h-screen w-full dark:bg-[#121212] bg-[#f9f9f9]">
      <Navbar />
      <div className="container mx-auto p-24">
        <h1 className="text-3xl dark:text-violet-500 text-violet-600 font-semibold my-6">
          Configurações do PC
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {configs.map((config, index) => (
            <ConfigBlock key={index} {...config} />
          ))}
        </div>

        <h1 className="text-3xl dark:text-violet-500 text-violet-600 font-semibold my-6">
          Periféricos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {peripherals.map((peripheral, index) => (
            <PeripheralBlock key={index} {...peripheral} />
          ))}
        </div>

        <h1 className="text-3xl dark:text-violet-500 text-violet-600 font-semibold my-6">
          Servidor
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Servidor.map((servidor, index) => (
            <ServidorBlock key={index} {...servidor} />
          ))}
        </div>

        <h1 className="text-3xl dark:text-violet-500 text-violet-600 font-semibold my-6">
          Old
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Old.map((Old, index) => (
            <OldBlock key={index} {...Old} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EquipamentosList
