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

  dock(station){
    this.station = station;
    this.user = null;
    this.charge = Math.floor((Math.random() * 100));
    recharge()
  }

  async recharge(){
    console.log('Starting charge');
    while(this.charge<100){
      await new Promise(resolve => setTimeout(resolve, 1000)); // wait 1 seconds
      this.charge += 25
      if (this.charge<100){
        console.log(this.charge)
      }
    }
    if (this.charge>100){
      this.charge = 100 
    }
    console.log('Charge complete');
  }
}


module.exports = Scooter
