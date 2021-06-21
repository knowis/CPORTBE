import { operations } from 'solution-framework';

export default class extends operations.v1_getUserMessages {

  public async execute(): Promise<void> {
    const log = this.util.log;
    log.info('v1_getUserMessages.execute()');

    const schema = this.factory.schema.v1.Message();
    const messages = [];

    schema.id = '123';
    schema.read = true;
    schema.sender = 'testSender';
    schema.text = 'test message';
    schema.user = 'testUser';
    schema.createdBy = 'test';
    schema.createdOn = '2022-02-04';

    messages.push(schema);

    this.response.body = messages;
    this.response.status = 200;

  }

  /**
   * This function is automatically called when an error occurs within the execution flow of operation v1_getUserMessages
   * @param error Operation execution error that occurred.
   */
  public async handleError(error: Error): Promise<void> {
    const log = this.util.log;
    log.debug('v1_getUserMessages.handleError()');
    // Add Error handling logic below and set this.response that will be returned as operation v1_getUserMessages response
  }

}
