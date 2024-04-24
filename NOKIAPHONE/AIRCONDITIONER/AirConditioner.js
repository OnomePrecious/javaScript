class AirConditioner{
   constructor(){
              this.isOn=false;
              this.temperature=16;
    }

    
              onAc() {
                  this.isOn=true;
              }

              offAc(){
                 this.isOn=false;
             }             

             increaseAcTemperature(){
                                if(this.temperature<30&&this.isAcOn())
                                this.temperature++;    
                    }
             decreaseAcTemperature(){
                                   if(this.temperature > 16 )
                                   this.temperature--;                               
                    }  
            isAcOn(){
                return this.isOn;
                    }
            getTemp(){
                  return this.temperature;
                }
            
}

           
   module.exports = AirConditioner;