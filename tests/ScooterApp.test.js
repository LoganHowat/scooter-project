const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

describe('Test ScooterApp', () => {
    // register user
    const ScoAp = new ScooterApp()
    test('Testing that ScooterApp can register a new User', () => {
        let user1 = ScoAp.registerUser('User1','password1',20)
        expect(ScoAp.registeredUsers).toHaveProperty('User1',user1)
    });

    // log in
    test('Testing that User can be logged in using the login method', () => {
        ScoAp.loginUser('User1','password1')
        expect(ScoAp.registeredUsers['User1'].loggedIn).toBe(true)
    });

    //logout
    test('Testing that User can be logged in using the login method', () => {
        ScoAp.logoutUser('User1')
        expect(ScoAp.registeredUsers['User1'].loggedIn).toBe(false)
    });

    //Test createScooter
    test('Testing that create scooter function can be called and create scooter instance', () => {
        let scooter = ScoAp.createScooter('station1')
        expect(ScoAp.stations['station1'][0]).toBe(scooter)//Checks that the scooter was added to the array
    });


    test('Testing that we can rent scooter easily', () => {
        let scooter2 = ScoAp.createScooter('station1')
        ScoAp.rentScooter(2,'User1')
        expect(scooter2.station).toBe(null)//Scooter station should be null as it will be checked out to a user
        expect(scooter2.user).toBe('User1')
    });
});

// rent scooter

// dock scooter
