
import Navbar from "../../app/components/Navbar/NavbarComponent"
const post1 = () => {
  return (
    <div className="min-h-screen dark:bg-[#121212] bg-[#f9f9f9]">
      <Navbar />
      <main className="container mx-auto p-6 text-black dark:text-white">
        <div className="text-center text-4xl">
          <h1 className="my-10 text-center text-4xl dark:text-purple-300 text-purple-400">
            Resetar o CSS
          </h1>
        </div>
        <div className="text-xl my-4 text-center text-black dark:text-white p-8">
          Como Tirar o Estilo Base para criar o seu css do 0.
        </div>
        <p className="my-2">
      Reset CSS: Antes de começar a estilizar, é uma boa prática aplicar um
      "reset" CSS para remover qualquer estilo padrão aplicado pelos
      navegadores. Alguns desenvolvedores usam o Normalize.css ou Reset CSS
      para isso. Isso ajuda a garantir uma experiência mais consistente entre
      navegadores.
    </p>
    <p className="my-2">
      Você pode nomeá-lo como preferir, como "estilos.css". Estrutura básica
      HTML: Certifique-se de ter uma estrutura básica HTML em seu arquivo
      HTML.
    </p>
    <p className="my-2">
      Experimente e itere: À medida que você adiciona estilos, teste-os em
      diferentes navegadores e dispositivos para garantir que sua página seja
      responsiva e tenha a aparência desejada em todos os contextos.
    </p>
    <p className="my-2">
      Aprenda e adapte: À medida que você avança, continue aprendendo sobre
      as melhores práticas de design web e técnicas de estilização CSS para
      melhorar seus estilos e tornar seu código mais eficiente.
    </p>
    <p className="my-2">
      Lembre-se de que criar seu próprio estilo CSS do zero pode ser desafiador
      no início, mas também é uma ótima maneira de entender melhor como o CSS
      funciona e personalizar totalmente a aparência e o comportamento do seu
      site.
    </p>
    <p className="my-2">
      <a
        href="https://gist.github.com/Talonacosta/4853682a650dcfa7219284738de63dab"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 underline"
      >
        Link do meu Reset.css
      </a>
    </p>
  </main>
</div>
  )
}

export default post1
