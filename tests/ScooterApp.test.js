const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

describe('Test ScooterApp', () => {

    test('Testing that instance contains all the correct properties', () => {
        const TempScooterApp = new ScooterApp()
        expect(TempScooterApp).toHaveProperty("stations")
        expect(TempScooterApp).toHaveProperty("registeredUsers")
    });


    // register user
    const ScoAp = new ScooterApp()
    test('Testing that ScooterApp can register a new User', () => {
        let user1 = ScoAp.registerUser('User1','password1',20)
        expect(ScoAp.registeredUsers).toHaveProperty('User1',user1)
    });
    test('Testing registerUser method fails when user is too young', () => {
        expect(() => ScoAp.registerUser('Username','pass',10)).toThrowError('too young to register')
    });
    test('Testing registerUser method fails when user already registered', () => {
        expect(() => ScoAp.registerUser('User1','pass',19)).toThrowError('already registered')
    });

    // log in
    test('Testing that User can be logged in using the login method', () => {
        ScoAp.loginUser('User1','password1')
        expect(ScoAp.registeredUsers['User1'].loggedIn).toBe(true)
    });
    test('Testing login method fails when credentials are wrong', () => {
        expect(() => ScoAp.loginUser('Invaliduser','pass')).toThrowError('Username or password is incorrect')
    });

    //logout
    test('Testing that User can be logged in using the login method', () => {
        ScoAp.logoutUser('User1')
        expect(ScoAp.registeredUsers['User1'].loggedIn).toBe(false)
    });
    test('Testing logout method fails when credentials are wrong', () => {
        expect(() => ScoAp.logoutUser('Invaliduser','pass')).toThrowError('no such user is logged in')
    });

    //Test createScooter
    test('Testing that create scooter function can be called and create scooter instance', () => {
        let scooter = ScoAp.createScooter('station1')
        expect(ScoAp.stations['station1'][0]).toBe(scooter)//Checks that the scooter was added to the array
    });
    test('Testing createScooter method fails when the station is wrong', () => {
        expect(() => ScoAp.createScooter('fakestation')).toThrowError('no such station')
    });

    //Test rent scooter method
    test('Testing that we can rent scooter easily', () => {
        let scooter2 = ScoAp.createScooter('station1')
        ScoAp.rentScooter(2,'User1')
        expect(scooter2.station).toBe(null)//Scooter station should be null as it will be checked out to a user
        expect(scooter2.user).toBe('User1')
    });
    test('Testing error if scooter is already in use', () => {
        expect(() => ScoAp.rentScooter(2,'User')).toThrowError('scooter already in use')
    });

    //testing dock method
    test('Testing that we can dock a scooter', async () => {
        let scooter3 = ScoAp.createScooter('station2')
        ScoAp.dockScooter(scooter3,'station3')
        expect(scooter3.station).toBe('station3')
    });
    test('Testing error if station is incorrect', () => {
        let scooter3 = ScoAp.createScooter('station2')
        expect(() => ScoAp.dockScooter(scooter3,'InvalidStation')).toThrowError('no such station')
    });
    test('Testing error if station is incorrect', () => {
        let scooter3 = ScoAp.createScooter('station2')
        expect(() => ScoAp.dockScooter(scooter3,'station2')).toThrowError('scooter already at station')
    });
});


// dock scooter
