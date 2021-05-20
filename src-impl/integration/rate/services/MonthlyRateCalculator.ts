import { services } from 'solution-framework';
import { CalcInput } from 'solution-framework/dist/sdk/v1/namespace/apiFacadeSchema/rate_calculateMonthlyRate';

export default class extends services.rate_MonthlyRateCalculator {

  public async execute(): Promise<void> {
    const log = this.util.log;
    log.info('rate_MonthlyRateCalculator.execute()');

    try {
      const duration = this.input.duration;
      const amount = this.input.amount;

      // call interest Rate Calculator API to get nominal interest rate
      const interestRateInput = this.factory.entity.rate.InterestRateCalculator_Input();
      interestRateInput.duration = duration;

      const nominalInterestRate = (await this.services.rate.InterestRateCalculator(interestRateInput)).nominalInterestRate;

      const input: CalcInput = {
        duration: parseFloat(duration),
        amount: parseFloat(amount),
        nominalInterestRate: parseFloat(nominalInterestRate),
      }

      // call calculate API
      const response = await this.apis.calculateMonthlyRate.calculate(input);

      const monthlyRateResponse = this.factory.entity.rate.MonthlyRateCalculator_Output();
      monthlyRateResponse.monthlyRate = response.body.monthlyRate.toString();

      this.output = monthlyRateResponse;

    } catch (err) {
      log.error('Error in MonthlyRateCalculator', err);
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
