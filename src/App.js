import React, { useState } from 'react';
import logo from './livro-imagem.png';
import './App.css';
import Leitura from './components/Leitura';

function App() {
  const [livros, setLivros] = useState([
    { id: 1, text: "Daisy Jones & the Six" },
    { id: 2, text: "A Hipótese do Amor" },
    { id: 3, text: "Teto Para Dois" },
  ]);

  const [novoLivro, setNovoLivro] = useState('');
  const [livroEdicao, setLivroEdicao] = useState(null);  

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

  const editarLivro = (id, novoTexto) => {
    setLivros((prevLivros) =>
      prevLivros.map((livro) =>
        livro.id === id ? { ...livro, text: novoTexto } : livro
      )
    );
    setLivroEdicao(null); 
  };

  const removerLivro = (id) => {
    setLivros((prevLivros) => prevLivros.filter((livro) => livro.id !== id));
  };

  return (
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
}

export default App;