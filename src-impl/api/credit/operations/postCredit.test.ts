import { expect } from 'chai';
import { operationRunners, TestEnvironment } from 'solution-framework';
import { credit_CreditApplicationRequest } from 'solution-framework/dist/sdk/v1/namespace/schema/credit_CreditApplicationRequest';

describe('postCredit', () => {
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
    // await testEnvironment.cleanup();
  });
  it('works', async () => {
    const runner = new operationRunners.credit_postCreditRunner();
    runner.request.body = new credit_CreditApplicationRequest();
    runner.request.body.accepted = true;
    runner.request.body.amount = 1000;
    runner.request.body.currency = 'USD';
    runner.request.body.duration = 12;
    runner.request.body.purpose = 'Because'
    runner.request.body.user = 'jbo';
    await runner.run();
    expect(runner.response.status).to.equal(201);
  });

});
