# Conectando Leitores - Frontend Documentation

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=18.2.0&color=61dafb&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/static/v1?label=HTML&message=5&color=e34f26&style=for-the-badge&logo=html5"/>
  <img src="https://img.shields.io/static/v1?label=CSS&message=3&color=1572b6&style=for-the-badge&logo=css3"/>
  <img src="http://img.shields.io/static/v1?label=javascript&message=ES6&color=f7df1e&style=for-the-badge&logo=javascript"/>
  <img src="http://img.shields.io/static/v1?label=Axios&message=1.7.5&color=5A29E4&style=for-the-badge&logo=axios"/>
  <img src="http://img.shields.io/static/v1?label=Figma&message=16.13.3&color=F24E1E&style=for-the-badge&logo=figma"/>
  <img src="http://img.shields.io/static/v1?label=Git&message=2.45.2&color=f05032&style=for-the-badge&logo=git"/>
  <img src="http://img.shields.io/static/v1?label=GitHub&message=2024&color=181717&style=for-the-badge&logo=github"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=yellow&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
</p>

> Status do Projeto: :heavy_check_mark: (concluído) | :warning: (em desenvolvimento) | :x: (não iniciado)

### Tópicos

:small_blue_diamond: [Protótipo das Telas](#protótipo-das-telas-art) :heavy_check_mark:

:small_blue_diamond: [Organização do Repositório Backend](#organização-do-repositório-backend-triangular_ruler-straight_ruler) :heavy_check_mark:

:small_blue_diamond: [Instalação das dependências](#instalação-das-dependências-arrow_down_small) 

:small_blue_diamond: [Executar app](#executar-app-arrow_forward) 

---

## Protótipo das Telas :art:

- [Figma](https://www.figma.com/design/anIQvrHQ7iBeyOgDJ8ZTQ9/colliving?node-id=0-1&p=f&t=V64l5UHan0kxutPu-0)

---

## Organização do Repositório Backend :triangular_ruler: :straight_ruler:

```plaintext
Coliving-front
|
|    src/
|    │
|    ├── assets/                    # Imagens e ícones utilizados no projeto
|    │   ├── profile-icon.svg
|    │   └── edit-icon.svg
|    │
|    ├── components/                # Componentes reutilizáveis
|    │   ├── Cards/                 # Componentes para exibição de cartões de usuários
|    │   ├── FilterBar/             # Barra de filtro para os usuários
|    │   ├── Forms/                 # Formulários para criação e edição de usuários
|    │   ├── Modals/                # Modais para exibir sucesso ou confirmação
|    │   └── Navbar/                # Barra de navegação principal
|    │
|    ├── pages/                     # Páginas principais
|    │   ├── HomePage/              # Página inicial com lista de usuários, filtrar e deletar usuário
|    │   ├── CadastrarUsuarioPage/  # Página para cadastro de usuários
|    │   └── EditarUsuarioPage/     # Página para edição de dados do usuário
|    │
|    ├── services/                  # Lógica de comunicação com o backend
|    │   └── personService.js       # Funções para lidar com a criação, edição e exclusão de usuários
|    │
|    ├── routes/                    # Definição das rotas da aplicação
|    │   └── routes.jsx
|    │
|    ├── App.jsx                    # Componente principal que define o layout global
└── index.html
```

## Componentes
1. Navbar
    - Responsabilidade: Exibe a barra de navegação no topo da aplicação.
    - Funcionalidade: Contém links para navegação entre as páginas de cadastro e edição de usuários.
  
2. UserCard
    - Responsabilidade: Exibe as informações de cada usuário em um cartão.
    - Funcionalidade:
        - Mostra nome, telefone, e-mail, tipo de usuário e data de registro.
        - Possui botões para editar e excluir o usuário.

3. UserForm
    - Responsabilidade: Formulário utilizado tanto na criação quanto na edição de usuários.
    - Funcionalidade: Recebe os dados de um novo usuário ou os dados de um usuário existente para edição. Valida os campos, incluindo a senha e a confirmação de senha.
  
4. Modais
    - SuccessModal: Exibe um modal com uma mensagem de sucesso (ex: "Usuário cadastrado com sucesso").
    - DeleteModal: Exibe um modal de confirmação para a exclusão de um usuário.
  
5. Páginas
    - HomePage
        - Responsabilidade: Página inicial que lista todos os usuários.
        - Funcionalidade:
            - Exibe todos os usuários em cartões utilizando o UserCard.
            - Permite filtrar os usuários com base no tipo de usuário.
            - Permite excluir um usuário ao clicar no ícone de lixeira em UserCard.

    - CadastrarUsuarioPage
        - Responsabilidade: Página para cadastro de novos usuários.
        - Funcionalidade:
            - Contém um formulário (UserForm) para preencher os dados do novo usuário.
            - Ao submeter o formulário, o usuário é criado e um modal de sucesso é exibido.
  
    - EditarUsuarioPage
        - Responsabilidade: Página para edição dos dados de um usuário existente.
        - Funcionalidade:
            - O formulário (UserForm) é preenchido automaticamente com os dados do usuário.
            - Caso o campo de senha seja deixado vazio, o valor não será enviado para o backend.
            - O botão de salvar atualiza os dados do usuário e exibe um modal de sucesso.
  
6. Rotas
As rotas da aplicação são configuradas utilizando o react-router-dom. As páginas são acessadas por meio das seguintes URLs:
- /: Página inicial (HomePage)
- /register-user: Página de cadastro de usuário (CadastrarUsuarioPage)
- /edit-user/:id: Página de edição de usuário (EditarUsuarioPage)

7. Fluxo de Dados
    - **Cadastro de Usuário:** Quando o usuário preenche o formulário na CadastrarUsuarioPage e envia os dados, o frontend envia os dados para o backend via POST. Se o cadastro for bem-sucedido, um modal de sucesso é exibido.
    - **Edição de Usuário:** Ao clicar no botão de edição de um usuário na HomePage, a EditarUsuarioPage é carregada com os dados do usuário. O usuário pode editar os dados e, ao enviar o formulário, os dados são enviados via PUT para o backend. Se a edição for bem-sucedida, um modal de sucesso é exibido.
    - **Exclusão de Usuário:** Quando o usuário clica no botão de exclusão em UserCard, é exibido um modal de confirmação. Caso o usuário confirme a exclusão, os dados do backend são atualizados via DELETE.

---

## Clonar Repositório :file_folder: :arrow_right: :file_folder:

```bash
git clone https://github.com/FrancisLauriano/coliving-frontend.git
```

---

## Contribuições :technologist:

**Contribuições são bem-vindas! Se você deseja contribuir com melhorias ou correções para o projeto, basta seguir estes passos:**

- Faça um fork do projeto.
- Crie uma branch para sua nova funcionalidade (git checkout -b feat/nova-funcionalidade).
- Faça commit das suas alterações (git commit -m 'Adiciona nova funcionalidade').
- Envie para o repositório remoto (git push origin feat/nova-funcionalidade).
- Crie um pull request.

---

## Instação das depedências :arrow_down_small:

```bash
$ npm install
```

## Executar app :arrow_forward:
 
**development:**
```bash
$ npm run dev
```

```bash
Running on http://localhost:5173/
```
...  
