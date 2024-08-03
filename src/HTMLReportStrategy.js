export default class HTMLReportStrategy {
  generateReport(data) {
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

    data.estados.forEach(estado => {
      estado.cidades.forEach(cidade => {
        result += `          <li><span class="cidade">${cidade}</span> - ${estado.sigla}</li>\n`;
      });
    });

    result += `
        </ul>
      </main>
    </body>
  </html>`;

    return result;
  }
}
