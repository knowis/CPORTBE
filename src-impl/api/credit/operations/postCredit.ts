import { operations } from 'solution-framework';


export default class extends operations.credit_postCredit {

  public async execute(): Promise<void> {
    const log = this.util.log;
    log.debug('credit_postCredit.execute()');
  }

  /**
   * This function is automatically called when an error occurs within the execution flow of operation credit_postCredit
   * @param error Operation execution error that occurred.
   */
  public async handleError(error: Error): Promise<void> {
    const log = this.util.log;
    log.debug('credit_postCredit.handleError()');
    // Add Error handling logic below and set this.response that will be returned as operation credit_postCredit response
  }

}
