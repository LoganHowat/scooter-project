class Scooter{
  // scooter code here
  static nextserial = 1;
  constructor(station){
    this.serial = Scooter.nextserial++;
    this.station = station;
    this.charge = 100;
    this.isBroken = false;
  }
}


module.exports = Scooter
