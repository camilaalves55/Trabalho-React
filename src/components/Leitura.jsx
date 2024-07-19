import React from 'react';
import Livro from './Livro';

const Leitura = ({ livros, removerLivro, setLivroEdicao }) => {

  return (
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
};

export default Leitura;
