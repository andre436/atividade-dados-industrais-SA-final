const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AutomacaoData = require('./AutomacaoData');
const sequelize = require('./db');
const PDFDocument = require('pdfkit');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/data', async (req, res) => {
  const { temperatura, pressao, tempo } = req.body;
  const newData = await AutomacaoData.create({ temperatura, pressao, tempo });
  res.json(newData);
});

app.get('/data', async (req, res) => {
  const data = await AutomacaoData.findAll();
  res.json(data);
});

app.get('/report', async (req, res) => {
  const data = await AutomacaoData.findAll();
  const doc = new PDFDocument();
  let filename = 'report.pdf';
  res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
  res.setHeader('Content-type', 'application/pdf');
  doc.pipe(res);

  doc.fontSize(25).text('Relatório de Dados de Automação', { align: 'center' });
  doc.moveDown();

  data.forEach(entry => {
    doc.text(`Temperatura: ${entry.temperatura}, Pressão: ${entry.pressao}, Tempo: ${entry.tempo}`);
  });

  doc.end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Server is running on port ${PORT}`);
});
