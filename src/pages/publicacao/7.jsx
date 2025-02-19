import Navbar from "../../app/components/Navbar/NavbarComponent"
const post7 = () => {
  return (
    <div className="min-h-screen dark:bg-[#121212] bg-[#f9f9f9]">
      <Navbar />
      <main className="container mx-auto p-6 ">
        <div className="text-center text-4xl ">
        <h1 className="text-3xl font-bold mb-4 dark:text-violet-500 text-violet-600">Meus jogos preferidos</h1>
      <p className="text-lg mb-4">Neste artigo, vou compartilhar minha lista de jogos favoritos, cada um com uma experiência única e especial. Vamos dar uma olhada:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>The Legend of Zelda: Breath of the Wild</li>
        <li>The Witcher 3: Wild Hunt</li>
        <li>Red Dead Redemption 2</li>
        <li>Dark Souls</li>
        <li>Super Mario Odyssey</li>
        <li>Persona 5</li>
      </ul>
      <p className="text-lg">Cada um desses jogos oferece uma jornada emocionante e envolvente, com histórias cativantes, jogabilidade desafiadora e visuais impressionantes. Vou compartilhar minha experiência com cada um deles e o que os torna tão especiais para mim.</p>
    </div>
        
  </main>
</div>
  )
}

  export default post7;
