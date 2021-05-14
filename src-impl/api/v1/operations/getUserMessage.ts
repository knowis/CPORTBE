import { operations } from 'solution-framework';


export default class extends operations.v1_getUserMessage {

  public async execute(): Promise<void> {
    const log = this.util.log;
    log.debug('v1_getUserMessage.execute()');
  }

  /**
   * This function is automatically called when an error occurs within the execution flow of operation v1_getUserMessage
   * @param error Operation execution error that occurred.
   */
  public async handleError(error: Error): Promise<void> {
    const log = this.util.log;
    log.debug('v1_getUserMessage.handleError()');
    // Add Error handling logic below and set this.response that will be returned as operation v1_getUserMessage response
  }

}
