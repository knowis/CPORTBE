import { expect } from 'chai';
import { operationRunners, TestEnvironment } from 'solution-framework';

describe('postTestdata', () => {
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
    const runner = new operationRunners.v1_postTestdataRunner();
    await runner.run();
    expect(runner.response.status).to.equal(200);
  });

});
