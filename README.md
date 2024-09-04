# Bytebank

Este é um projeto desenvolvido durante o curso de TypeScript na Alura. A aplicação Bytebank foi criada com o objetivo de aplicar e consolidar os conhecimentos adquiridos ao longo do curso, utilizando TypeScript para melhorar a qualidade e a segurança do código.

## Índice

- [Configuração do Ambiente](#configuração-do-ambiente)
- [Instalação das Ferramentas](#instalação-das-ferramentas)
- [Desenvolvimento com JavaScript](#desenvolvimento-com-javascript)
- [Refatoração para TypeScript](#refatoração-para-typescript)
- [Arquivo tsconfig.json](#arquivo-tsconfigjson)
- [Trabalhando com Tipos](#trabalhando-com-tipos)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Módulos e Import/Export](#módulos-e-importexport)
- [Armazenamento e Exibição de Dados](#armazenamento-e-exibição-de-dados)
- [Conclusão](#conclusão)

## Configuração do Ambiente

Antes de iniciar o desenvolvimento, foi necessário configurar o ambiente para suportar o TypeScript. Isso envolveu a criação de um projeto simples utilizando TypeScript e a preparação de todas as ferramentas necessárias.

## Instalação das Ferramentas

As ferramentas essenciais foram instaladas para garantir um fluxo de trabalho eficiente com TypeScript, incluindo o Node.js, npm, e o TypeScript Compiler (`tsc`).

## Desenvolvimento com JavaScript

Inicialmente, a solução foi desenvolvida utilizando JavaScript puro. Durante essa etapa, foi possível compreender as limitações do JavaScript, especialmente em termos de tipagem e segurança do código.

## Refatoração para TypeScript

Após a compreensão das limitações do JavaScript, a solução foi refatorada para TypeScript. A transição permitiu uma melhor organização do código e introduziu tipagem estática, aumentando a robustez da aplicação.

## Arquivo tsconfig.json

Durante a refatoração, conhecemos o arquivo `tsconfig.json`, que é fundamental em qualquer projeto TypeScript. Este arquivo permite configurar e personalizar o comportamento do TypeScript Compiler de acordo com as necessidades do projeto.

## Trabalhando com Tipos

Aprendemos as vantagens de trabalhar com tipos definidos, o que ajuda a evitar erros comuns durante o desenvolvimento. Além disso, exploramos a criação de tipos personalizados utilizando Type Alias, bem como Arrays tipados.

### Enums

O conceito de Enums foi introduzido para melhorar a clareza e a organização do código, permitindo o uso de valores nomeados em vez de literais.

## Estrutura de Arquivos

Reorganizamos a estrutura de arquivos do projeto para melhor refletir a arquitetura da aplicação. A separação clara de responsabilidades entre módulos e componentes facilitou a manutenção e a escalabilidade do projeto.

## Módulos e Import/Export

Compreendemos as vantagens da utilização de módulos em aplicações TypeScript. Utilizamos os comandos `import` e `export` para importar e exportar recursos entre os módulos, promovendo um código mais modular e reutilizável.

## Armazenamento e Exibição de Dados

Implementamos o armazenamento de dados utilizando `localStorage`. Além disso, agrupamos as transações por data e as exibimos através do componente de Extrato, aplicando as formatações corretas para moedas e datas no front-end.

### Modificação de Datas

O objeto Date das Transações foi modificado para exibir corretamente a data na interface da aplicação, garantindo uma apresentação adequada das informações.

## Conclusão

Este projeto proporcionou uma imersão prática no uso do TypeScript, permitindo aplicar conceitos fundamentais e explorar as vantagens dessa poderosa linguagem no desenvolvimento de aplicações web.
