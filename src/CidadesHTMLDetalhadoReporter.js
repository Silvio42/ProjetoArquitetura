import * as fs from 'node:fs';

export default class CidadesHTMLDetalhadoReport {

  ler(caminho) {
    this.dados = fs.readFileSync(caminho, 'utf-8');
  }

  parse() {
    const data = JSON.parse(this.dados);
    this.cidades = [];

    data.estados.forEach(estado => {
      estado.cidades.forEach(cidade => {
        this.cidades.push({ Nome: cidade, Estado: estado.sigla });
      });
    });
  }

  reportarDetalhado() {
    let result = `
    <!DOCTYPE HTML>
    <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <title>Relatório de Nomes de Cidades</title>
      </head>
      <body>
        <header>
          <h1>Relatório de Nomes de Cidades</h1>
        </header>
        <main>
          <ul>
    `;

    this.cidades.forEach(cidade => {
      result += `            <li>${cidade.Nome} - ${cidade.Estado}</li>\n`;
    });

    result += `
          </ul>
        </main>
      </body>
    </html>`;

    return result;
  }
}
