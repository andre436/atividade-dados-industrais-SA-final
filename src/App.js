import React from 'react';
import { jsPDF } from 'jspdf'; // Importe o jsPDF
import './App.css';

function App() {
  // Função para baixar os dados como PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Adiciona o título ao PDF
    doc.setFontSize(20);
    doc.text('Dados de Automação Industrial', 20, 20);

    // Adiciona os dados ao PDF
    doc.setFontSize(12);
    doc.text('Temperatura: 25.6 °C, Pressão: 1020.5 hPa, Tempo: 1 min', 20, 40);
    doc.text('Temperatura: 26.1 °C, Pressão: 1021.1 hPa, Tempo: 2 min', 20, 50);

    // Salva o arquivo PDF com o nome desejado
    doc.save('dados_automacao.pdf');
  };

  return (
    <div className="container">
      <h1>Dados de Automação Industrial</h1>
      <ul className="data-list">
        <li>Temperatura: 25.6 °C, Pressão: 1020.5 hPa, Tempo: 1 min</li>
        <li>Temperatura: 26.1 °C, Pressão: 1021.1 hPa, Tempo: 2 min</li>
      </ul>
      {/* Botão para baixar o PDF */}
      <button className="download-btn" onClick={handleDownloadPDF}>Baixar PDF</button>
    </div>
  );
}

export default App;
