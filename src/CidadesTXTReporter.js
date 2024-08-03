import * as fs from 'node:fs';

export default class CidadesTXTReport {

  ler(caminho) {
    this.dados = fs.readFileSync(caminho, 'utf-8');
  }

  parse() {
    this.cidades = JSON.parse(this.dados);
  }

  reportar() {
    let result = `Relatório de Nomes de Cidades
=============================\n`;

    this.cidades.forEach(cidade => {
      result += `* ${cidade['Nome']}\n`;
    });

    return result;
  }
}
