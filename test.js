import * as fs from 'node:fs';
import { exec } from 'child_process';

function readGeneratedFile(path) {
  return fs.readFileSync(path, 'utf-8');
}

function testReportGeneration(format, outputPath, expectedContent) {
  exec(`node index.js ${format}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${stderr}`);
      return;
    }

    const generatedContent = readGeneratedFile(outputPath);
    if (generatedContent.includes(expectedContent)) {
      console.log(`Test passed for format ${format}`);
    } else {
      console.log(`Test failed for format ${format}`);
    }
  });
}

testReportGeneration('html', './data/relatorio.html', '<h1>Relatório de Nomes de Cidades</h1>');
testReportGeneration('html-detalhado', './data/relatorio_detalhado.html', '<h1>Relatório de Nomes de Cidades</h1>');
testReportGeneration('txt', './data/relatorio.txt', 'Relatório de Nomes de Cidades');
