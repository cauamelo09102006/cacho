// src/components/CadastroAnimal.js
import React, { useState } from 'react';

const CadastroAnimal = ({ onCadastro }) => {
  const [foto, setFoto] = useState('');
  const [raca, setRaca] = useState('');
  const [local, setLocal] = useState('');
  const [tipo, setTipo] = useState('');
  const [contato, setCont] = useState('')

  const handleCadastro = () => {
    // Verifica se todos os campos estão preenchidos
    if (!foto || !raca || !local || !tipo || !contato) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Adicione a propriedade 'status' e 'tipo' ao objeto do animal
    onCadastro({ foto, raca, local, tipo, contato, status: 'pendente' });

    // Limpar campos após o cadastro
    setFoto('');
    setRaca('');
    setLocal('');
    setTipo('');
    setCont('');
  };

  return (
    <div>
      <h2>Cadastro de Animal Perdido/Resgatado</h2>
      <form>
        <label>Foto URL:</label>
        <input type="text" value={foto} onChange={(e) => setFoto(e.target.value)} />

        <label>Raça:</label>
        <input type="text" value={raca} onChange={(e) => setRaca(e.target.value)} />

        <label>Local (Encontrado/Perdido):</label>
        <input type="text" value={local} onChange={(e) => setLocal(e.target.value)} />

        <label>Encontrado:</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Selecione...</option>
          <option value="perdido">Perdido</option>
          <option value="resgatado">Resgatado</option>
        </select>

        <label>Contato:</label>
        <input type="text" value={contato} onChange={(e) => setCont(e.target.value)} />

        <button type="button" onClick={handleCadastro}>Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroAnimal;
