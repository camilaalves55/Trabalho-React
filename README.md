# Tema: Lista de Livros para Ler

Um site para criar uma lista de leitura com livros para ler construído com **React**. O objetivo deste projeto é fornecer uma interface simples para adicionar, editar e remover livros da sua lista de leitura.

### Instruções de Instalação e Uso

## Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construir interfaces de usuário
- **CSS** - Para estilização do aplicativo

## Funcionalidades

- Adicionar novos livros à lista
- Editar livros existentes
- Remover livros da lista
- Interface simples e fácil de usar

## Instalação e Uso

1. ```sh
    mkdir Atividade-Avaliativa  
    ```

2. ```sh
    npx create-react-app trabalho 
    ```

3. ```sh
    cd trabalho/
    ```

4. ```sh
    code .
    ```

5. ```sh
    npm start
    ```

A aplicação estará disponível no navegador em http://localhost:3000.

### **App.js**

- **Imports** `import React, { useState } from 'react';`- usado para importar o React e o hook específico `useState` da biblioteca react, `import logo from './livro-imagem.png';` - usado para importar a imagem `livro-imagem.png` para ser utilizada posteriormente pelo nome `logo`, `import './App.css';` - usada para conectar a página de App.css e `import Leitura from './components/Leitura';` - usada para importar uma variável da pasta components do arquivo `Leitura.jsx`.

- **function** `function App() {` - usado para definir uma função App que é o componente principal do projeto de lista de livros.

- **const** 

const [livros, setLivros] = useState([
    { id: 1, text: "Daisy Jones & the Six" },
    { id: 2, text: "A Hipótese do Amor" },
    { id: 3, text: "Teto Para Dois" },
  ]);

`Declara uma variável de estado livros que armazena a lista de livros, e uma função setLivros para atualizar essa lista. O estado inicial é uma lista com três livros.`


  const [novoLivro, setNovoLivro] = useState('');

`Declara uma variável de estado novoLivro para armazenar o texto do novo livro que o usuário deseja adicionar, e uma função setNovoLivro para atualizar esse texto.
javascript
Copiar código
const [livroEdicao, setLivroEdicao] = useState(null);`

 const [livroEdicao, setLivroEdicao] = useState(null); 

`Declara uma variável de estado livroEdicao para armazenar o ID do livro que está sendo editado, e uma função setLivroEdicao para definir o livro a ser editado`

const adicionarLivro = () => {
    if (novoLivro.trim()) {
      setLivros((prevLivros) => [
        ...prevLivros,
        { id: Date.now(), text: novoLivro.trim() },
      ]);
      setNovoLivro('');
      setLivroEdicao(null); 
    }
  };

`Usada para dicionar um novo livro à lista de livros, verificando se novoLivro não está vazio e, se não estiver, adiciona um novo objeto livro com um id único baseado no timestamp atual e o texto do livro. Após adicionar, limpa o campo de entrada e remove qualquer livro que esteja sendo editado.`

 const editarLivro = (id, novoTexto) => {
    setLivros((prevLivros) =>
      prevLivros.map((livro) =>
        livro.id === id ? { ...livro, text: novoTexto } : livro
      )
    );
    setLivroEdicao(null); 
  };

`Atualiza o texto de um livro específico baseado no seu id, procurando sobre a lista de livros e substituindo o texto do livro com o id correspondente pelo novo texto fornecido. Após editar, ele remove a seleção do livro que estava sendo editado.`

  const removerLivro = (id) => {
    setLivros((prevLivros) => prevLivros.filter((livro) => livro.id !== id));
  };

`Remove um livro da lista baseado no seu id. Filtra a lista de livros para excluir o livro com o id fornecido.`

- **return** 

`return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <h2>Lista de Livros Para Ler</h2>
        <div className="livro-form">
          <input type="text" value={novoLivro} onChange={(e) => setNovoLivro(e.target.value)} placeholder={livroEdicao ? 'Edite o livro' : 'Digite um novo livro'}></input>
          <button className='botao-input' onClick={() => (livroEdicao ? editarLivro(livroEdicao.id, novoLivro) : adicionarLivro())}>
            {livroEdicao ? 'Atualizar' : 'Adicionar'}
          </button>
        </div>
        <Leitura livros={livros} removerLivro={removerLivro} setLivroEdicao={setLivroEdicao} />
      </div>
    </div>
  );
}`

- Retorna a lista de livros, um campo de entrada de texto para adicionar um novo livro, e um botão para adicionar o livro à lista. Para cada livro, exibe o texto do livro e dois botões para editar e remover o livro.

- **export** 

export default App;

`Exporta o componente App para que ele possa ser importado e usado em outras partes da aplicação.`


### **Livro.jsx**

- **Import:** `import React from 'react'` - usado para importar o React, `import editar from '../editar.png';` e `import apagar from '../apagar.png';` - usados para importar as imagens editar.png e apagar.png que está fora da pasta components, e `import '../App.css';` - que está sendo utilizado para conectar à página de App.css.

- **Const:**

`const Livro = ({ LivroName, onRemove, onEdit }) => {`

Está definindo o componente Livro como uma função que recebe três props, sendo elas, LivroName: O nome do livro que será exibido, o
onRemove: Função que será chamada quando o botão de apagar for clicado e
onEdit: Função que será chamada quando o botão de editar for clicado.

- **Return:**

`  return (
    <li>
        {LivroName}
        <div className='botoes'>
            <button className="botao-apagar" onClick={onRemove}><img src={apagar} className="apagar" alt="botao-apagar"/></button>
            <button className="botao-editar" onClick={onEdit}><img src={editar} className="editar" alt="botao-editar"/></button>
        </div>
    </li>
  );
};`

O componente Livro renderiza um item de uma lista de livros com o nome do livro passado como prop LivroName. Ele utiliza um elemento `<li>` para listar o livro e exibe o nome do livro. Dentro do item da lista, há uma `<div>` com a classe CSS botoes que contém dois botões: um botão para remover o livro, com a classe botao-apagar e uma imagem com a classe apagar, que chama a função onRemove ao ser clicado, e um botão para editar o livro, com a classe botao-editar e uma imagem com a classe editar, que chama a função onEdit ao ser clicado.

- **Export:**

`export default Livro;`

Exporta o componente Livro para que ele possa ser importado e usado em outras partes da aplicação.

### **Leitura.jsx**

- **Import:** `import React from 'react';` - usado para importar o React e `import Livro from './Livro';` - que está sendo usado para importar a `const` Livro do arquivo Livro.jsx

- **Const:** 

`const Leitura = ({ livros, removerLivro, setLivroEdicao }) => {`

O componente Leitura está responsável por exibir uma lista de livros e gerenciar suas operações básicas, como edição e remoção. Ele está recebendo três props: livros, que é um array de objetos representando os livros a serem exibidos, onde cada objeto contém um id e um text (nome do livro); removerLivro, uma função que é chamada quando o usuário deseja remover um livro da lista, recebendo o id do livro a ser removido; e setLivroEdicao, uma função que é chamada para definir o livro a ser editado, recebendo o objeto livro completo para que as informações possam ser atualizadas. O componente renderiza um título "Lista de Leituras" seguido por uma lista de livros, onde cada livro é representado pelo componente Livro, com botões para remover ou editar o livro conforme as funções passadas por props.

- **Return:** 

`return (
    <div>
      <h3>Lista de Leituras</h3>
      <ul>
        {livros.map((livro) => (
          <Livro
            key={livro.id}
            LivroName={livro.text}
            onRemove={() => removerLivro(livro.id)}
            onEdit={() => setLivroEdicao(livro)}
          />
        ))}
      </ul>
    </div>
  );
};`

O componente Leitura renderiza uma lista de livros utilizando o componente Livro para cada item da lista. O `<div>` atua como um contêiner para o conteúdo do componente, enquanto o título `<h3>`Lista de Leituras`</h3>` fornece uma descrição para a seção da lista de livros. Dentro de uma lista não ordenada `<ul>`, o código itera sobre o array livros usando livros.map((livro) => ( ... )) para criar um componente Livro para cada objeto livro no array. Cada componente Livro recebe a prop key com o id do livro para ajudar o React a identificar itens únicos e manter o desempenho das atualizações da lista. O nome do livro é passado para a prop LivroName, e duas funções são fornecidas: onRemove, que chama a função removerLivro com o id do livro quando o botão de remover é clicado, e onEdit, que chama a função setLivroEdicao com o objeto livro quando o botão de editar é clicado, permitindo que o livro seja editado.

- **Export:** 

`export default Leitura;`

Exporta o componente Leitura para que ele possa ser importado e usado em outras partes da aplicação.

## Clone o Repositório

Clone o repositório para sua máquina local usando o comando:

```bash
git clone https://github.com/camilaalves55/Trabalho-React.git
```
# Link do Surge

```sh
  knowing-cause.surge.sh
```