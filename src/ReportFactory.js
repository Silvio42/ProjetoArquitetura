import CidadesHTMLReport from './CidadesHTMLReporter.js';
import CidadesTXTReport from './CidadesTXTReporter.js';
import CidadesHTMLDetalhadoReport from './CidadesHTMLDetalhadoReporter.js';

export default class ReportFactory {
  static createReport(type) {
    if (type === 'html') {
      return new CidadesHTMLReport();
    } else if (type === 'txt') {
      return new CidadesTXTReport();
    } else if (type === 'html-detalhado') {
      return new CidadesHTMLDetalhadoReport();
    } else {
      throw new Error('Unsupported report type');
    }
  }
}
