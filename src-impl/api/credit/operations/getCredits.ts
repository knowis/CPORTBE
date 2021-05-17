import { operations } from 'solution-framework';

export default class extends operations.credit_getCredits {

  public async execute(): Promise<void> {
    const log = this.util.log;
    log.debug('v1_getCredits.execute()');
    const credits = [];

    let cred = this.factory.schema.credit.Credit();
    cred.id = `c0001-${this.request.query.user}`;
    cred.user = `${this.request.query.user}`;
    cred.name = 'Consumer Loan';
    cred.purpose = 'Financing a new consumer good';
    cred.amount = 12000;
    cred.currency = 'USD';
    cred.duration = 36;
    cred.effectiveInterestRate = 0.0183;
    cred.nominalInterestRate = 0.017;
    cred.monthlyRate = 342.82;
    cred.end = '2023-01-30'
    credits.push(cred);

    cred = this.factory.schema.credit.Credit();
    cred.id = `c0002-${this.request.query.user}`;
    cred.user = `${this.request.query.user}`;
    cred.name = 'Consumer Loan';
    cred.purpose = 'Financing a new mobile phone';
    cred.amount = 1000;
    cred.currency = 'EUR';
    cred.duration = 12;
    cred.effectiveInterestRate = 0.0112;
    cred.nominalInterestRate = 0.0110;
    cred.monthlyRate = 83.84;
    cred.end = '2022-02-04'
    credits.push(cred);

    this.response.body = credits;
    this.response.status = 200
  }

  /**
   * This function is automatically called when an error occurs within the execution flow of operation v1_getCredits
   * @param error Operation execution error that occurred.
   */
  public async handleError(error: Error): Promise<void> {
    const log = this.util.log;
    log.debug('v1_getCredits.handleError()');
    // Add Error handling logic below and set this.response that will be returned as operation v1_getCredits response
  }

}
