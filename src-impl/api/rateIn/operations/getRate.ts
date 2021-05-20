import { operations } from 'solution-framework';

export default class extends operations.rateIn_getRate {

  public async execute(): Promise<void> {
    const log = this.util.log;
    log.info('rateIn_getRate.execute()');

    const duration = this.request.path.duration;
    const amount = this.request.query.amount;

    // construct inputs for services
    const interestRateCalculatorInput = this.factory.entity.rate.InterestRateCalculator_Input();
    interestRateCalculatorInput.duration = duration.toString();

    // call Integration Service to get the nominal and effective interest rates
    const { nominalInterestRate, effectiveInterestRate } = await this.services.rate.InterestRateCalculator(interestRateCalculatorInput);

    const monthlyRateCalculatorInput = this.factory.entity.rate.MonthlyRateCalculatorRequest();
    monthlyRateCalculatorInput.amount = amount ? amount.toString() : '0';
    monthlyRateCalculatorInput.duration = duration.toString();
    monthlyRateCalculatorInput.nominalInterestRate = nominalInterestRate.toString();

    // call Integration Service to get the monthly rate
    const { monthlyRate } = await this.services.rate.MonthlyRateCalculator(monthlyRateCalculatorInput);

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
