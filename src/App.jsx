// src/App.js
import React, { useState } from 'react';
import CadastroAnimal from './components/CadastroAnimal';
import ListaAnimais from './components/ListaAnimais';
import './App.css'

function App() {
  const [animais, setAnimais] = useState([]);

  const handleCadastro = (novoAnimal) => {
    setAnimais([...animais, novoAnimal]);
  };

  const handleRemover = (index) => {
    const novosAnimais = [...animais];
    novosAnimais.splice(index, 1);
    setAnimais(novosAnimais);
  };

  const handleAlterarStatus = (index) => {
    const novosAnimais = [...animais];
    novosAnimais[index].tipo = novosAnimais[index].tipo === 'perdido' ? 'resgatado' : 'perdido';
    setAnimais(novosAnimais);
  };
  
  const sttt = (index) => {
    const novosAnimais = [...animais];
    if (novosAnimais[index].tipo === 'resgatado') {
      novosAnimais[index].status = 'concluído';
    } else {
      // Caso contrário, altera entre "pendente" e "concluído"
      novosAnimais[index].status = novosAnimais[index].status === 'pendente' ? 'concluído' : 'pendente';
    }
      setAnimais(novosAnimais);
  };

  return (
    <div>
      <CadastroAnimal onCadastro={handleCadastro} />
      <ListaAnimais animais={animais} onRemover={handleRemover} onAlterarStatus={handleAlterarStatus} sttt={sttt} />
    </div>
  );
}

export default App;
