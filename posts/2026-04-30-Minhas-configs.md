---
titulo: "Minhas configs Do KDE"
subtitulo: "Minhas configuraçoes do desktop KDE plasma"
tema: "Tecnologia"
data: "2026-04-30"
---

# KDE Plasma — Minhas Configurações

Fala pessoal! Neste post vou compartilhar as minhas configurações do **KDE Plasma**, o ambiente desktop que uso no dia a dia. Se você curte um desktop bonito, organizado e altamente personalizável, esse conteúdo é pra você.

O tema central de toda a minha setup é o **Gruvbox** — uma paleta de cores retrô com tons quentes de marrom, laranja, amarelo e verde, que além de visualmente agradável, é excelente para longas sessões no computador por não cansar os olhos.

---

## Por que o KDE Plasma?

O KDE Plasma é um dos ambientes desktop mais completos e personalizáveis do Linux. Ele oferece:

- **Alta performance** com baixo consumo de recursos
- **Personalização profunda** de praticamente todos os elementos visuais
- **Integração nativa** com aplicativos Qt e do ecossistema KDE
- **Estabilidade** para uso diário tanto em trabalho quanto em lazer

---

## O Tema: Gruvbox

O **Gruvbox** é uma paleta de cores criada por Pavel Pertsev, inspirada no estilo retro groove. As cores principais são:

- 🟤 Fundo escuro (`#282828`)
- 🟠 Laranja e amarelo para destaques
- 🟢 Verde suave para elementos secundários
- ⬜ Texto claro com bom contraste

Essa paleta foi aplicada em todos os elementos do meu desktop: barra de tarefas, janelas, esquema de cores do sistema, terminal e aplicativos.

---

## Esquema de Cores

O arquivo de esquema de cores fica em:

```
~/.local/share/color-schemes/
```

Ele define as cores para todos os elementos visuais do Plasma — títulos de janelas, botões, fundos, textos e bordas — todos seguindo a paleta Gruvbox.

---

## Configurações do Sistema

Os arquivos de configuração do KDE ficam em:

```
~/.config/
```

Os principais arquivos que customizei foram:

- `kdeglobals` — configurações globais de cores e fontes
- `plasmarc` — tema visual do Plasma (painel, widgets)
- `kwinrc` — comportamento do gerenciador de janelas KWin
- `breezerc` — decorações de janelas

---

## Repositório

Todas as minhas configurações estão disponíveis no GitHub para quem quiser usar ou se inspirar:

🔗 [github.com/Tal0na/talona-kde-plasma](https://github.com/Tal0na/talona-kde-plasma)

Basta clonar o repositório e copiar as pastas `.config` e `.local` para o seu diretório home:

```bash
git clone https://github.com/Tal0na/talona-kde-plasma.git
cp -r talona-kde-plasma/.config ~/
cp -r talona-kde-plasma/.local ~/
```

> ⚠️ **Atenção:** faça backup das suas configs atuais antes de substituir!

---

## Conclusão

O KDE Plasma com Gruvbox é uma combinação que une estética e funcionalidade. Se você está procurando um desktop personalizado, bonito e confortável para o dia a dia, recomendo muito experimentar essa setup.
