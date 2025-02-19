import Navbar from "../../app/components/Navbar/NavbarComponent"
const post10 = () => {
  return (
    <div className="min-h-screen dark:bg-[#121212] bg-[#f9f9f9]">
      <Navbar />
      <main className="container mx-auto p-6 text-black dark:text-white">
        <div>
          <h1 className="text-3xl font-bold mb-4 dark:text-violet-500 text-violet-600">
            Compartilhando Dicas e Tutoriais Úteis
          </h1>
          <p className="text-lg mb-4">
            Neste espaço, vamos compartilhar uma variedade de dicas úteis e
            tutoriais passo a passo sobre como utilizar software, aplicativos,
            ferramentas de produtividade e plataformas online. Abaixo estão
            alguns dos tópicos que abordaremos:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Como Usar o Microsoft Excel para Análise de Dados</li>
            <li>Introdução ao Photoshop: Edição Básica de Imagens</li>
            <li>Dicas para Maximizar a Produtividade com o Trello</li>
            <li>
              Tutorial de Configuração do Google Drive para Colaboração em
              Equipe
            </li>
            <li>Como Criar um Blog do Zero com WordPress</li>
            <li>Utilizando o Zoom para Reuniões Virtuais Eficientes</li>
          </ul>
          <p className="text-lg">
            Fique atento aos nossos próximos posts, onde vamos detalhar cada um
            desses tópicos e fornecer orientações práticas para ajudá-lo a
            aproveitar ao máximo essas ferramentas e plataformas.
          </p>
        </div>
      </main>
    </div>
  )
}

export default post10
