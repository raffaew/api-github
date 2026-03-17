# GitHub Repositórios
Este projeto é uma aplicação que interage com a API do GitHub para visualizar informações sobre repositórios e usuários.

<img width="933" height="638" alt="image" src="https://github.com/user-attachments/assets/cbab5ff6-3a99-424f-82c2-6f0bb1678a87" />


## 📚 O que é a GitHub API?

A **GitHub API** é uma interface de programação que permite aos desenvolvedores acessar e manipular dados hospedados no GitHub. Ela expõe endpoints (via REST ou GraphQL) para interagir com quase todos os recursos da plataforma, incluindo repositórios, perfis de usuários, issues, pull requests, commits e muito mais. Isso permite a criação de integrações, automações e aplicações personalizadas que estendem as funcionalidades do GitHub.

## 🚀 Funcionalidades e Uso da API

Neste projeto, a API do GitHub foi utilizada para fornecer os dados necessários para a visualização dos repositórios. As principais integrações incluem:

- **Busca de Usuários**: Consumo de endpoints públicos para localizar usuários e recuperar dados de perfil (como avatar, nome, bio).
  - Endpoint típico: `GET /users/{username}`
- **Listagem de Repositórios**: Recuperação da lista de repositórios públicos pertencentes a um usuário.
  - Endpoint típico: `GET /users/{username}/repos`
- **Detalhamento de Repositório**: Exibição de informações como nome, descrição, linguagem principal, número de estrelas (stars) e forks.

## 🛠 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

- **React com TypeScript**: Biblioteca para construção de interfaces de usuário, utilizando a segurança e robustez da tipagem estática.
- **Context API**: Utilizada para o gerenciamento de estados globais da aplicação, como as informações do usuário e a lista de repositórios, evitando o "prop drilling".
- **Sass**: Pré-processador CSS que adiciona superpoderes à estilização, como variáveis, aninhamento e mixins.
- **Axios**: Cliente HTTP baseado em Promises para realizar as requisições à API do GitHub.


## ▶️ Como Rodar o Projeto

Siga as instruções abaixo para executar o projeto em sua máquina local.

### Instalação

1. Clone o repositório e entre na pasta do projeto:
   ```bash
   cd repository-view
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### Executando a Aplicação

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

## 🌐 Link da aplicação
[Acesse aqui](https://raffaew.github.io/api-github/)
