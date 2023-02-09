class User {
  constructor(username,password,age){
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password){
    if (password == this.password){
      this.loggedIn = true;
      return 'user has been logged in';
    }else{
      throw new Error('Username or password is incorrect');
    }
  }
  logout(){
    this.loggedIn = false;
    return('user is logged out')
  }
}

module.exports = User
