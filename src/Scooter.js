class Scooter{
  // scooter code here
  static nextserial = 1;
  constructor(station){
    this.serial = Scooter.nextserial++;
    this.station = station;
    this.charge = 100;
    this.isBroken = false;
    this.user = null;
  }

  rent(){
    if (this.charge<20){
      throw new Error('scooter needs to charge')
    }else if(this.isBroke){
      throw new Error('scooter needs repair')
    }else{
      this.station = null;
    }
  }
}


module.exports = Scooter
