import React from "react";

const Skills = () => {
  return (
    <div class="sm:py-20 lg:py-24">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-purple-500 md:mb-6 lg:text-3xl">
            Minhas Skills
          </h2>

          <p class="mx-auto max-w-screen-md text-center text-white md:text-lg">
            Com habilidades afiadas e uma paixão por aprendizado contínuo, estou
            sempre pronto para enfrentar desafios e contribuir de maneira
            impactante, seja nas áreas de tecnologia, criatividade ou resolução
            de problemas.
          </p>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">
          <div class="relative rounded-lg bg-zinc-900 p-5 pt-8">
            <h3 class="mb-3 text-lg font-semibold text-purple-500 md:text-xl">
              Design de interfaces
            </h3>
            <p class="text-white">
              Desenvolvo designs de interfaces que unem estética e
              funcionalidade, priorizando a experiência do usuário. Crio
              soluções visuais que comunicam efetivamente e elevam a interação
              digital.
            </p>
          </div>

          <div class="relative rounded-lg bg-zinc-900 p-5 pt-8">
            <h3 class="mb-3 text-lg font-semibold text-purple-500 md:text-xl">
              Usabilidade
            </h3>
            <p class="text-white">
              Meu foco na usabilidade se traduz em criar experiências
              intuitivas, onde cada interação é pensada para proporcionar
              eficiência e satisfação aos usuários, garantindo acessibilidade e
              facilidade de uso.
            </p>
          </div>
          <div class="relative rounded-lg bg-zinc-900 p-5 pt-8">
            <h3 class="mb-3 text-lg font-semibold text-purple-500 md:text-xl">
              UX/UI
            </h3>
            <p class="text-white">
              Na interseção entre UX e UI, busco a fusão perfeita entre
              funcionalidade e beleza, criando designs que não apenas agradam
              visualmente, mas também proporcionam uma experiência fluida e
              envolvente para os usuários.
            </p>
          </div>
          <div class="relative rounded-lg bg-zinc-900 p-5 pt-8">
            <h3 class="mb-3 text-lg font-semibold text-purple-500 md:text-xl">
              HTML 5, CSS 3 e JavaScript
            </h3>
            <p class="text-white">
              Domino HTML5, CSS3 e JavaScript, traduzindo ideias em páginas web
              interativas e estilizadas. Minha habilidade técnica se combina com
              uma abordagem criativa para oferecer experiências digitais
              impactantes e responsivas.
            </p>
          </div>
          <div class="relative rounded-lg bg-zinc-900 p-5 pt-8">
            <h3 class="mb-3 text-lg font-semibold text-purple-500 md:text-xl">
              Prototipagem
            </h3>
            <p class="text-white">
              Através da prototipagem, transformo conceitos em realidade
              tangível, permitindo a validação e aprimoramento iterativo de
              ideias antes da implementação final. Minha abordagem ágil na
              prototipagem contribui para a criação de soluções mais eficientes
              e alinhadas às necessidades do usuário.
            </p>
          </div>
          <div class="relative rounded-lg bg-zinc-900 p-5 pt-8">
            <h3 class="mb-3 text-lg font-semibold text-purple-500 md:text-xl">
              React e TailWind
            </h3>
            <p class="text-white">
              Com React e Tailwind CSS, desenvolvo interfaces dinâmicas e
              estilizadas. A combinação da eficiência do React com a
              flexibilidade do Tailwind permite criar aplicações web modernas,
              mantendo um código limpo e componentes reutilizáveis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
