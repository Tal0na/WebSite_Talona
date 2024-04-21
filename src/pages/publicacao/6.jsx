import Navbar from "../../app/components/Navbar/NavbarComponent"
const post6 = () => {
  return (
    <div className="min-h-screen dark:bg-[#121212] bg-[#f9f9f9]">
      <Navbar />
      <main className="container mx-auto p-6 text-black dark:text-white">
        <div className="text-center text-4xl  text-black dark:text-white">
          <h1 className="text-3xl font-bold mb-4">
            Discutindo Tecnologias de Desenvolvimento de Software
          </h1>
          <p className="text-lg mb-4">
            Neste artigo, exploraremos uma variedade de tópicos essenciais no
            mundo do desenvolvimento de software, abrangendo desde linguagens de
            programação até metodologias de trabalho. Vamos mergulhar em:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Linguagens de Programação</li>
            <li>Frameworks</li>
            <li>Bibliotecas</li>
            <li>Técnicas de Desenvolvimento de Software</li>
            <li>Metodologias Ágeis</li>
            <li>Melhores Práticas de Codificação</li>
          </ul>
          <p className="text-lg">
            Cada um desses elementos desempenha um papel fundamental na criação
            de software de alta qualidade e na eficiência do processo de
            desenvolvimento. Vamos explorar cada um deles em detalhes.
          </p>
        </div>
      </main>
    </div>
  )
}

export default post6
