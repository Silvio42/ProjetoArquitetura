import * as fs from 'node:fs';
import ReportFactory from './src/ReportFactory.js';

const [,, format] = process.argv;

try {
  const report = ReportFactory.createReport(format);
  report.ler(`./data/cidades-${format === 'html-detalhado' ? '1' : '2'}.json`);
  report.parse();

  let result;
  if (format === 'html') {
    result = report.reportar();
    fs.writeFileSync('./data/relatorio.html', result);
    console.log('Relatório HTML gerado com sucesso em ./data/relatorio.html');
  } else if (format === 'html-detalhado') {
    result = report.reportarDetalhado();
    fs.writeFileSync('./data/relatorio_detalhado.html', result);
    console.log('Relatório HTML detalhado gerado com sucesso em ./data/relatorio_detalhado.html');
  } else if (format === 'txt') {
    result = report.reportar();
    fs.writeFileSync('./data/relatorio.txt', result);
    console.log('Relatório TXT gerado com sucesso em ./data/relatorio.txt');
  } else {
    console.log('Formato não suportado. Use "html", "html-detalhado" ou "txt".');
  }
} catch (error) {
  console.error('Erro:', error.message);
}
