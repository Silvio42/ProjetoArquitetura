export default class ReportDecorator {
  constructor(report) {
    this.report = report;
  }

  ler(caminho) {
    this.report.ler(caminho);
  }

  parse() {
    this.report.parse();
  }

  reportar() {
    return this.report.reportar();
  }
}

export class DetailedReportDecorator extends ReportDecorator {
  reportarDetalhado() {
    return this.report.reportarDetalhado();
  }
}
