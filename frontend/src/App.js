import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const App = () => {
  const [chartData, setChartData] = useState({});
  
  useEffect(() => {
    // Faz a requisição ao backend para pegar os dados de automação
    axios.get('http://localhost:3001/data') // Supondo que esta seja sua rota para pegar dados
      .then((response) => {
        const data = response.data;

        const temperatures = data.map(dado => dado.temperatura);
        const pressures = data.map(dado => dado.pressao);
        const times = data.map(dado => dado.tempo);

        // Configurar os dados do gráfico
        setChartData({
          labels: times,  // Valores de tempo no eixo X
          datasets: [
            {
              label: 'Temperatura (°C)',
              data: temperatures,
              borderColor: 'red',
              fill: false,
            },
            {
              label: 'Pressão (Pa)',
              data: pressures,
              borderColor: 'blue',
              fill: false,
            }
          ]
        });
      })
      .catch(error => console.log('Erro ao buscar dados:', error));
  }, []);

  return (
    <div>
      <h1>Dados de Automação</h1>
      <Line data={chartData} />
      <button onClick={() => window.open('http://localhost:3001/report')}>Baixar Relatório</button>
    </div>
  );
};

export default App;
