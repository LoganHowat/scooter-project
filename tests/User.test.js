const User = require('../src/User')

// User tests here
test('Testing that instance contains all the correct properties', () => {
    const TempUser = new User('user','pass',23)
    expect(TempUser).toHaveProperty("username")
    expect(TempUser).toHaveProperty("password")
    expect(TempUser).toHaveProperty("age")
    expect(TempUser).toHaveProperty("loggedIn")
});
const User1 = new User('user','pass',23)
// test data types
test('Testing data types of properites', () => {
    expect(typeof User1.username).toBe("string")
    expect(typeof User1.password).toBe("string")
    expect(typeof User1.age).toBe("number")
    expect(typeof User1.loggedIn).toBe("boolean")
});

// test login
test('Testing login method', () => {
    User1.login('pass')
    expect(User1.loggedIn).toBe(true)
});
test('Testing login method fails', () => {
    expect(() => User1.login('assasas')).toThrowError('Username or password is incorrect')
});
// test logout
test('Testing logout method', () => {
    User1.logout()
    expect(User1.loggedIn).toBe(false)
});
