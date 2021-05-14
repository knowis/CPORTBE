import { operations } from 'solution-framework';


export default class extends operations.credit_getCredits {

  public async execute(): Promise<void> {
    const log = this.util.log;
    log.debug('credit_getCredits.execute()');
  }

  /**
   * This function is automatically called when an error occurs within the execution flow of operation credit_getCredits
   * @param error Operation execution error that occurred.
   */
  public async handleError(error: Error): Promise<void> {
    const log = this.util.log;
    log.debug('credit_getCredits.handleError()');
    // Add Error handling logic below and set this.response that will be returned as operation credit_getCredits response
  }

}
