import React from 'react';
import editar from '../editar.png';
import apagar from '../apagar.png';
import '../App.css';

const Livro = ({ LivroName, onRemove, onEdit }) => {
  return (
    <li>
        {LivroName}
        <div className='botoes'>
            <button className="botao-apagar" onClick={onRemove}><img src={apagar} className="apagar" alt="botao-apagar"/></button>
            <button className="botao-editar" onClick={onEdit}><img src={editar} className="editar" alt="botao-editar"/></button>
        </div>
    </li>
  );
};

export default Livro;
