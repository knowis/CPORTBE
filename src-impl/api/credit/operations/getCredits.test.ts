import { expect } from 'chai';
import { operationRunners, TestEnvironment } from 'solution-framework';
import { credit_getCreditsRequest } from 'solution-framework/dist/sdk/v1/namespace/operationRequest/credit_getCreditsRequest';

describe('getCredits', () => {
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
    const runner = new operationRunners.credit_getCreditsRunner();
    runner.request = new credit_getCreditsRequest();
    runner.request.query.user = 'jbo';
    await runner.run();
    expect(runner.response.status).to.equal(200);
  });

});
