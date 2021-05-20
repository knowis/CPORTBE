import { expect } from 'chai';
import { serviceRunners, TestEnvironment } from 'solution-framework';


describe('rate:MonthlyRateCalculator', () => {

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
    const runner = new serviceRunners.rate_MonthlyRateCalculatorRunner();
    runner.input = testEnvironment.factory.entity.rate.MonthlyRateCalculatorRequest();
    runner.input.duration = '12';
    runner.input.amount = '10000'
    runner.input.nominalInterestRate = '0.01075';

    await runner.run();

    // then
    const monthlyRate = runner.output.monthlyRate;
    expect(monthlyRate).to.equal('838.24');

  });

});
