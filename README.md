

<h1 align="center">
     🍀 <a href="#" alt="Sosteio de Habitação">Listou</a>
</h1>

## 💻 Sobre o projeto

🍀 A terceira etapa consiste em adaptar a aplicação React, desenvolvida na etapa 1, para consumir os web services desenvolvidos em Spring. O projeto deve ser versionado e, em seguida, modificado para consumir os serviços recém-implementados usando os protocolos REST ou SOAP.

Entregáveis terceira etapa: fazer o upload de todos os códigos-fonte no repositório GitHub e compartilhar o endereço com o tutor.🏆

---

## ⚙️ Funcionalidades

- [x] Visualização das listas de compras
  - [x] visualização do detalhe da lista

---


## 🚀 Como executar o projeto


### Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


#### 🧭 Rodando a aplicação 

```bash

# Clone este repositório
$ git clone git@github.com/lffernandes/FIAP-mba3scjo-2021-GrupoA-Fase3


# Acesse a pasta do projeto no seu terminal/cmd
$ cd FIAP-mba3scjo-2021-GrupoA-Fase3-master

# Troque para a branch da versão 2.0 
$ git checkout listou-2.0

#Atualize o seu repositorio local de acordo com o remoto
$ git pull

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm run dev

# A aplicação será aberta na porta:3000- acesse https://localhost:3000

```

#### Caso tenha algum problema com a API é possivel rodar localmente da seguinte forma:

```bash

# Instale JSON Server
$ npm install -g json-server


# Acesse a pasta do arquivo json
$ cd FIAP-mba3scjo-2021-GrupoA-Fase3-master\listou_2.0\data

# Execute o Json Server
$ json-server --watch db.json --port 3004

# A API será aberta na porta:3004 - acesse https://localhost:3004/lists

```

---

## 🦸 Autores


 <sub><b>Luiz Felipe M. Fernandes</b></sub></a> <a href="https://www.linkedin.com/in/luizffernandes/" title="lzfrnds">🚀</a>
 


