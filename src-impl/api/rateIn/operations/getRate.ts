import { operations } from 'solution-framework';

export default class extends operations.rateIn_getRate {

  public async execute(): Promise<void> {
    const log = this.util.log;
    log.info('rateIn_getRate.execute()');

    const monthlyRate = '838.24';
    const nominalInterestRate = '0.01085';
    const effectiveInterestRate = '0.01091';

    const rateResponse = this.factory.schema.rateIn.RateResponse();
    rateResponse.monthlyRate = parseFloat(monthlyRate);
    rateResponse.nominalInterestRate = parseFloat(nominalInterestRate);
    rateResponse.effectiveInterestRate = parseFloat(effectiveInterestRate);

    this.response.body = rateResponse;

    this.response.status = 200;
  }

  /**
   * This function is automatically called when an error occurs within the execution flow of operation v1_getRate
   * @param error Operation execution error that occurred.
   */
  public async handleError(error: Error): Promise<void> {
    const log = this.util.log;
    log.debug('v1_getRate.handleError()');
    // Add Error handling logic below and set this.response that will be returned as operation v1_getRate response
  }

}
