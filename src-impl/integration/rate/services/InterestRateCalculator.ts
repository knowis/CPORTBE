import { services } from 'solution-framework';

export default class extends services.rate_InterestRateCalculator {

  public async execute(): Promise<void> {
    const log = this.util.log;
    log.info('rate_InterestRateCalculator.execute()');

    try {
      // parse input as a number
      const duration = parseFloat(this.input.duration);

      // call getInterestRateByDuration API
      const response = await this.apis.calculateInterestRate.getInterestRateByDuration({ duration });
      const { nominalInterestRate, effectiveInterestRate } = response.body;
      const interestRateResponse = this.factory.entity.rate.InterestRateResponse();

      interestRateResponse.effectiveInterestRate = effectiveInterestRate.toString();
      interestRateResponse.nominalInterestRate = nominalInterestRate.toString();

      this.output = interestRateResponse;
    } catch (err) {
      log.error('Error in rate_InterestRateCalculator', err);
      this.handleError(err);
    }
  }

  /**
   * This function is automatically called when an error occurs within the execution flow of operation v1_getRate
   * @param error Operation execution error that occurred.
   */
  public handleError(error: Error): void {
    const log = this.util.log;
    log.info('rate_InterestRateCalculator.handleError()');
    // Add Error handling logic below and set this.response that will be returned as operation v1_getRate response
    throw error;
  }

}
