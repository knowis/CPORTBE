import { operations } from 'solution-framework';


export default class extends operations.credit_postCredit {

  public async execute(): Promise<void> {
    const log = this.util.log;
    log.debug('v1_postCredit.execute()');

    log.info(`${this.request.body._getJSON()}`)

    this.response.status = 201;
  }

  /**
   * This function is automatically called when an error occurs within the execution flow of operation v1_postCredit
   * @param error Operation execution error that occurred.
   */
  public async handleError(error: Error): Promise<void> {
    const log = this.util.log;
    log.debug('v1_postCredit.handleError()');
    // Add Error handling logic below and set this.response that will be returned as operation v1_postCredit response
  }

}
