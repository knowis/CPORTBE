import { expect } from 'chai';
import { serviceRunners, TestEnvironment } from 'solution-framework';

describe('mess:GetUserMessagesService', () => {

  const testEnvironment = new TestEnvironment();
  before(async () => {
    // This block will run automatically before all tests.
    // Alternatively, use beforeEach() to define what should automatically happen before each test.
    // This is an optional block.
  });
  after(async () => {
    // This block will run automatically after all tests.
    // Alternatively, use afterEach() to define what should automatically happen after each test.
    // This is an optional block.

    // Recommended: remove all instances that were created
    await testEnvironment.cleanup();
  });

  it('works', async () => {
    const runner = new serviceRunners.mess_GetUserMessagesServiceRunner();
    runner.input = testEnvironment.factory.entity.mess.GetUserMessagesService_Input();
    runner.input.user = 'testUser';

    await runner.run();

    const messages = runner.output;

    expect(messages).to.have.length.greaterThan(0);

    for(const message of messages) {
      expect(message).to.have.property('messageId');
      expect(message).to.have.property('text');
      expect(message).to.have.property('read');
      expect(message).to.have.property('sender');
      expect(message).to.have.property('user');
      expect(message).to.have.property('createdBy');
    }
  });

});
