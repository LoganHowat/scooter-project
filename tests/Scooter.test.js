const Scooter = require('../src/Scooter')
const User = require('../src/User')

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method
  test("recharge", async () => {
    const scooter = new Scooter();
    scooter.charge = 10
    await scooter.recharge(); // we need to wait for the charge!
    expect(scooter.charge).toBe(100);
});

})
