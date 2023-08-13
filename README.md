  <h1  align="center">

<img  alt="logo"  title="logo"  src="https://github.com/Dheph/ac-finances/assets/51960639/2864f634-b8ab-411a-bcd5-6a6a084722eb" />

</h1>

  

<h3  align="center">

Bem Vindo a o Repositório do App Android da AC Finances 

</h3> 

# Índice 

* [Comandos](#comandos)
  

<p  align="center">

<a  target="_blank"  href="https://reactnative.dev/">
<img  alt="React Native"  src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
</a>

<a  target="_blank"  href="https://docs.expo.dev/">
<img  alt="Expo"  src="https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37">
</a>

<a  target="_blank"  href="https://styled-components.com/">
<img  alt="Styled Components"  src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
</a>

</p>

## Sobre o Projeto

Projeto consiste em um app mobile de controle de finanças, onde você pode realizar os lançamentos de despesas e receitas.



 ## 🎨 Organização do projeto

Falando sobre a estrutura do projeto temos subdivisões de componentes para além de facilitar na leitura, também nos ajuda a dividir melhor os testes, como no caso da Home:

<img src="https://github.com/Dheph/ac-finances/assets/51960639/91f66a3d-9fd9-4991-ad0b-6f670ee45d28" width=300 />

Nosso projeto também conta com <a target="_blank"  href="https://github.com/typicode/husky">husky</a>, <a target="_blank"  href="https://prettier.io/">prettier</a> e <a target="_blank" href="https://eslint.org/">eslint</a> para ajudar na padronização.


- ⚛️ Projeto também é organizado utilizando alguns conceitos com base no atomic design

- **[Referências](https://atomicdesign.bradfrost.com/chapter-2/)**

<table>
<tr>
<td colspan="1"><h4 align="center">Arvore Completa</h4> </td>
<td colspan="1"><h4 align="center">Componentes</h4></td>
<td colspan="1"><h4 align="center">Serviços</h4></td>
</tr>
<tr>
<td><img src="https://github.com/Dheph/ac-finances/assets/51960639/9e3966eb-c938-480a-8abb-7f6070e2aee7" width=300 /></td>
<td>
<img src="https://github.com/Dheph/ac-finances/assets/51960639/b7f719c2-76f0-4980-bf0d-4c912a86fbd2" width=300 />
<p> " O index abraça todos os componentes melhorando as importações "</p>
</td>
<td><img src="https://github.com/Dheph/ac-finances/assets/51960639/f0108860-b46a-4249-90f6-27a4bd540c1c" width=300 />
<p> " Os dtos informados servem para auxiliar nas tipagens das requisições"</p>
</td>
</table> 

  

## 🔨 Tecnologias:

  

- **[TypeScript](https://www.typescriptlang.org/)**

- **[Styled Components](https://styled-components.com/)**

- **[React Native](https://reactnative.dev/)**

- **[Expo](https://docs.expo.dev/)**


## Comandos

  

- `yarn start`: Executa a aplicação em `localhost:19002`

- `yarn android`: Executa a aplicação em `localhost:19002` somente para android

- `yarn ios`: Executa a aplicação em `localhost:19002` somente para ios

- `yarn web`: Executa a aplicação em `localhost:19002` somente para web

- `yarn lint`: Executa o prettier check

- `yarn format`: Executa a formatação do prettier na arvore

- `yarn gpc`: Executa o yarn format e adiciona as alterações com git add

- `yarn test`: Executa os testes em geral

  

## 🚀 Como rodar este projeto

  

Para clonar e executar este aplicativo, você precisará de [Git](https://git-scm.com) e [NodeJs](https://nodejs.org/en/) Instalado em seu computador.

  

### 🔃 Requisitos e versões:

  

NodeJs: >=20.0.0

NPM: >=9.6.6
  

### 🌀 Clonando o repositório

```bash

# Clone este repositório

$  git  clone https://github.com/Dheph/ac-finances.git
  
# Acesse a pasta do projeto no terminal/cmd

$  cd  ac-finances

```
  
### 🎲 Rodando a Aplicação

```bash

# Instale as dependências

$  yarn  install

# Execute a Aplicação em Desenvolvimento

$  yarn  start

# Rodando a aplicação em emuladores android com expo

$  yarn  android 

# Rodando a aplicação em emuladores ios com expo

$  yarn  ios

```

### 📁 Configuração .ENV

```bash
# para descomplicar alguns pontos não estamos
# utilizando o env abaixo, porem a configuração esta feita

REACT_APP_API_BASE_URL=

```
  

# Pré commit

```bash

$ yarn gpc

```

> verifica os itens com prettier, realiza a formatação e deixa pronto para o commit :), como descrito na lista de comandos
---

### Itens que podem ser adicionados

```

- Filtros gerais e Pesquisa de transações individuais:

- Delete de transações

- Login com conta do google e vinculo de informações dos usuários.

- Página para visualização das transações em graficos com filtros

- Envio de alertas de consumo excessivo 

- Pagina de perfil do usuário

- Adição de novas informações como renda mensal, 
despesas fixas, despesas variáveis e orçamento do mês
com alertas de acordo com a escolha do usuário.

```

### Notas do Dev

Algumas decisões não seriam tomadas caso estivesse trabalhando com um backend robusto, onde iria conter as principais regras de negocio fazendo com que eu não precisa-se adiciona-las no front, uma das decisões esta no services como o **postTransactionService**  onde eu atualizo de acordo com o tipo de transação, faço a atualização do valor total e todos os calculos, além dos refreshs da página.

as rotas a extras e os ternários só existem para poder facilitar na hora das chamadas na mockapi.

<img src="https://github.com/Dheph/ac-finances/assets/51960639/c5759fd9-4449-421f-b027-2d812683b256" />
