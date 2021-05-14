import { operations } from 'solution-framework';


export default class extends operations.rateIn_getRate {

  public async execute(): Promise<void> {
    const log = this.util.log;
    log.debug('rateIn_getRate.execute()');
  }

  /**
   * This function is automatically called when an error occurs within the execution flow of operation rateIn_getRate
   * @param error Operation execution error that occurred.
   */
  public async handleError(error: Error): Promise<void> {
    const log = this.util.log;
    log.debug('rateIn_getRate.handleError()');
    // Add Error handling logic below and set this.response that will be returned as operation rateIn_getRate response
  }

}
