import * as fs from 'node:fs';

export default class CidadesHTMLReport {

  ler(caminho) {
    this.dados = fs.readFileSync(caminho, 'utf-8');
  }

  parse() {
    this.cidades = JSON.parse(this.dados);
  }

  reportar() {
    let result = `
    <!DOCTYPE HTML>
    <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Relatório de Nomes de Cidades</title>
      </head>
      <body>
        <h1>Relatório de Nomes de Cidades</h1>
        <ul>
    `;

    this.cidades.forEach(cidade => {
      result += `          <li>${cidade['Nome']}</li>\n`;
    });

    result += `
        </ul>
      </body>
    </html>`;

    return result;
  }
}
