const Scooter = require('../src/Scooter')
const User = require('../src/User')

//Method tests
describe('scooter methods', () => {
  // tests here!
  jest.setTimeout(12000)//Have to set a new timeout to account for the waiting in the recharge and request repair methods
  test('Testing that instance contains all the correct properties', () => {
    const TempScooter = new Scooter()
    expect(TempScooter).toHaveProperty("serial")
    expect(TempScooter).toHaveProperty("station")
    expect(TempScooter).toHaveProperty("charge")
    expect(TempScooter).toHaveProperty("isBroken")
    expect(TempScooter).toHaveProperty("user")
  });

  //rent method
  const scooter = new Scooter('station1')
  test('Testing the rent method in the scooter class', () => {
    scooter.rent()
    expect(scooter.station).toBe(null)
  });
  test('Testing that it errors when the scooter is broken', () => {
    scooter.isBroken = true;
    expect(() => scooter.rent()).toThrowError('scooter needs repair')
    scooter.isBroken = false;
  });
  test('Testing that it errors when the scooter is not charged', () => {
    scooter.charge = 10;
    expect(() => scooter.rent()).toThrowError('scooter needs to charge')
    scooter.charge = 100
  })

  //dock method
  test('Testing the dock method in the scooter class', () => {
    scooter.dock('station3')
    expect(scooter.station).toBe('station3')
    expect(scooter.user).toBe(null)
  });


  //requestRepair method
  test('Testing the requestRepair method in the scooter class', async() => {
    scooter.isBroken = true;
    await scooter.requestRepair()
    expect(scooter.isBroken).toBe(false)
  });


  //charge method
  test("recharge", async () => {
    const scooter = new Scooter();
    scooter.charge = 10
    await scooter.recharge(); // we need to wait for the charge!
    expect(scooter.charge).toBe(100);
});

})
