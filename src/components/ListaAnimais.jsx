// src/components/ListaAnimais.js
import React from 'react';

const ListaAnimais = ({ animais, onRemover, onAlterarStatus, sttt }) => {
  return (
    <div>
      <h2>Lista de Animais Cadastrados</h2>
      <ul>
        {animais.map((animal, index) => (
          <li key={index}>
            <img src={animal.foto} alt="Foto do Animal" />
            <p>Raça: {animal.raca}</p>
            <p>Local: {animal.local}</p>
            <p>Contato: {animal.contato}</p>
            <p>Encontrado: {animal.tipo}</p>
            <p><strong>Status:</strong> {animal.status}</p>
            <button onClick={() => sttt (index)}>Alterar Status</button>
            <button onClick={() => onAlterarStatus (index)} className='ar'>Foi encontrado</button>
            <button onClick={() => onRemover(index)} className='ub'>Remover</button>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaAnimais;
