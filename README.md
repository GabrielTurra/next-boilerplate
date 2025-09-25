# Next 15 Boilerplate
Esse é um boilerplate que me ajuda a otimizar configurações e tarefas repetitivas em meus projetos.

Utilize o seguinte comando para criar seu projeto:
```bash 
npx create-next-app@latest -e https://github.com/GabrielTurra/next-boilerplate
```

<p>✅ Next.js 15.4</p>
<p>✅ Automação com Plop para geração de componentes e páginas (veja abaixo as intruções).</p>
<p>✅ Commits padronizados com Husky, Lint Staged e Commitzen (veja abaixo as intruções).</p>
<p>✅ Github Actions configurado para CI/CD</p>
<p>✅ Ambientes públicos e privados configurados de forma independente.</p> 
<p>✅ Shadcn e Tailwind para estilização.</p> 
<p>✅ Biome.js como linter.</p>
<p>✅ Testes de componentes com Vitest.</p>
<p>✅ Storybook para documentação de componentes e páginas.</p> 

# Pré-requisitos
- Node 20 ou superior.
- Instalar de forma global o [Commitzen](https://www.npmjs.com/package/commitizen/).

# Automações
Primeiro comece rodando em seu terminal:
```bash 
npm run generate
```
## Componentes
Aqui 2 opções serão exibidas:

### Componentes de UI 
Esses são componentes que ditam a identidade visual da aplicação: ``botões, alerts, badges`` e outros componentes que carregam identidade visual consigo. 

Este será criado em ``src/components/ui/`` e além da própria estrutura também irão gerar de forma automática:
- 1 arquivo de testes
- 1 storybook

### Componentes comuns
Utilize-os para a criação de: ``Sections, Wrappers``, e outros componentes que sao tratados como containers para outros conteúdos como um Hero ou um Form.

## Páginas
Ao selecionar, um arquivo será criado de acordo com o nome informado no terminal no caminho ``src/app``.

# Commits

Antes de tudo você precisará instalar de forma global o [Commitzen](https://www.npmjs.com/package/commitizen/)

Para manter o padrão e as boas práticas dentro do projeto ao invés de utilizar ``git commit`` utilize o seguinte comando:

```bash
npm run c
```

Este irá automaticamente rodar 2 comandos: ``git add .`` e ``npx cz`` e logo após as informações serem preechidas corretamente o comando ``git commit`` será executado.