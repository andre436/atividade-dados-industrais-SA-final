// src/components/MeuComponente.js
import React from 'react';

const dados = [
  { "temperatura": 25.6, "pressao": 1020.5, "tempo": 1 },
  { "temperatura": 26.1, "pressao": 1021.1, "tempo": 2 },
  // adicione mais dados conforme necessário
];

const MeuComponente = () => {
  return (
    <div>
      <h1>Dados de Automação Industrial</h1>
      <ul>
        {dados.map((item, index) => (
          <li key={index}>
            Temperatura: {item.temperatura} °C, Pressão: {item.pressao} hPa, Tempo: {item.tempo} min
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeuComponente;
