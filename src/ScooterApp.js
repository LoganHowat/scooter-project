const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = {station1:[],station2:[],station3:[]}
    this.registeredUsers = {}
  }

  registerUser(username,password,age){
    if (this.registeredUsers.hasOwnProperty(username)){
      console.log('already registered')
    }else if(age<18){
      console.log('too young to register')
    }else{
      //create a new instance of User to add the the registered users object
      let user = new User(username,password,age)
      this.registeredUsers[username] = user;
      return user;
    }
  }

  //Method that will call the User class to log the user in 
  loginUser(username,password){
    if (this.registeredUsers.hasOwnProperty(username)){
      //line below console.logs the return from the login method for User
      //this.registeredUsers.username is the object property from the instance created at the start for the user
      console.log(this.registeredUsers[username].login(password))
    }else{
      throw new Error('Username or password is incorrect');
    }
  }

  //Method that will call the user class to log a user out
  logoutUser(username){
    if (this.registeredUsers.hasOwnProperty(username) && this.registeredUsers[username].loggedIn == true){
      console.log(this.registeredUsers[username].logout(username))
    }else{
      throw new Error('no such user is logged in');
    }
  }

  createScooter(station){
    if (this.stations.hasOwnProperty(station)){
      let scooter = new Scooter(station)
      this.stations[station].push(scooter)
      return scooter
    }else{
      throw new Error('no such station')
    }
  }

  rentScooter(scooter,user){
    for (const key in this.stations){
      for (let i=0;i<this.stations[key].length;i++){
        if (scooter == this.stations[key][i]['serial'] && this.stations[key][i]['station'] != null){
          let tempScooter = this.stations[key][i]
          tempScooter.rent()
          tempScooter.user = user;
          this.stations[key].splice(i,1)
        }else if(scooter == this.stations[key][i]['serial'] && this.stations[key][i]['station'] == null){
          throw new Error('scooter already in use')
        }
      }
    }
  } 
}

module.exports = ScooterApp
