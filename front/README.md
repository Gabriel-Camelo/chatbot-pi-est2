Passo a passo após o git clone:

1 - Entre na pasta do projeto
2 - Abra o terminal na pasta do projeto
3 - Verificar branch existentes. Comando: `git branch`
4 - Se a branch ao qual você não trabalhará não aparecer execute o comando `git checkout nome_da_branch` 
5 - Instale as dependencias. Execute o comando `npm install`
6 - Execute o comando `npm start` para inicializar o projeto;


DESCRIÇÃO DAS PASTAS


assets: Serve para armazenar imagens (imagens leves, se forem pesadas guardar na pasta img public), ícones, etc.

components: Componentes reutilizáveis da aplicação. Componentes que são unidades para a aplicação, um button, um dropdown, um modal, etc.

pages: As pages são as páginas que usam vários componentes. É essa a página que o usuário vai ver.

services: Aqui ficam as configurações de HTTP clientes, normalmente utilizando axios.

fonts: Fonts utilizadas na componentização das páginas.