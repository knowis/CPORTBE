import { operations } from 'solution-framework';

export default class extends operations.rateIn_getRate {

  public async execute(): Promise<void> {
    const log = this.util.log;
    log.debug('v1_getRate.execute()');

    const duration = this.request.path.duration;
    const amount = this.request.query.amount;

    const resp = this.factory.schema.rateIn.RateResponse();

    let nominalInterest;
    if(duration <= 12){
      nominalInterest = 0.0102;
    } else if(duration <= 24) {
      nominalInterest = 0.0114;
    } else if(duration <= 24) {
      nominalInterest = 0.0114;
    } else if(duration <= 36) {
      nominalInterest = 0.0136;
    } else if(duration <= 48) {
      nominalInterest = 0.0159;
    } else if(duration <= 60) {
      nominalInterest = 0.0217;
    }

    const m = 12;
    const im = nominalInterest / m;
    const effectiveInterest = Math.pow(1 + im, m) - 1;

    resp.nominalInterestRate = nominalInterest;
    resp.effectiveInterestRate = effectiveInterest;

    if(amount) {
      const n = duration / m;
      const s0 = amount;
      const cmn = Math.pow(1 + im, m * n)
      resp.monthlyRate = s0 * cmn * (im / (cmn - 1))
    }

    this.response.body = resp;
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
