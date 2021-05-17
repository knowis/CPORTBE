import { operations } from 'solution-framework';


export default class extends operations.credit_deleteCredit {

  public async execute(): Promise<void> {
    const log = this.util.log;
    const creditId = this.request.path.id;
    log.debug(`v1_deleteCredit.execute() and delete ${creditId}`);
    this.response.status = 204;
  }

  /**
   * This function is automatically called when an error occurs within the execution flow of operation v1_deleteCredit
   * @param error Operation execution error that occurred.
   */
  public async handleError(error: Error): Promise<void> {
    const log = this.util.log;
    log.debug('v1_deleteCredit.handleError()');
    // Add Error handling logic below and set this.response that will be returned as operation v1_deleteCredit response
  }

}
