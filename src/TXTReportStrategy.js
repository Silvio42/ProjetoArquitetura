export default class TXTReportStrategy {
  generateReport(data) {
    let result = `Relatório de Nomes de Cidades
=============================\n`;

    data.estados.forEach(estado => {
      estado.cidades.forEach(cidade => {
        result += `* ${cidade} - ${estado.sigla}\n`;
      });
    });

    return result;
  }
}
