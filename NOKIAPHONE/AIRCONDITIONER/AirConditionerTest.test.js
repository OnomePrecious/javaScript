let AirConditioner = require("./AirConditioner.js");
let airCon;
beforeEach(() => {
    airCon = new AirConditioner();
  });
  


test("test that ac is off by default",()=> {
       const value = airCon.isAcOn()
       expect(value).toBe(false);
})
       

test("test that ac can be on",()=> {
        airCon.onAc()
    const value = airCon.isAcOn()
    expect(value).toBe(true);
})



test("test that ac temperature is 16 by default", ()=>{
    airCon.increaseAcTemperature()
    const result = airCon.getTemp()
    expect(result).toBe(16);

})


test("test that ac temperature can be increased", ()=>{
    airCon.onAc()
    airCon.increaseAcTemperature()
    const result = airCon.getTemp()
    expect(result).toBe(17);
})


test("test that i increase temperature twice, temperature increases", ()=> {
    airCon.onAc()
    airCon.increaseAcTemperature()
    airCon.increaseAcTemperature()
    const result = airCon.getTemp()
    expect(result).toBe(18);
})


test("test that i can decrease temperature", ()=>{
    airCon.onAc()
    airCon.increaseAcTemperature()
    airCon.decreaseAcTemperature()
    const result = airCon.getTemp()
    expect(result).toBe(16);
})


test("test that when i decrease temperature twice, temperature decreases", ()=> {
    airCon.onAc()
    airCon.increaseAcTemperature()
    airCon.increaseAcTemperature()
    airCon.increaseAcTemperature()
    airCon.decreaseAcTemperature()
    const result = airCon.getTemp()
    expect(result).toBe(18);
})


test("test that i cannot increase an ac if it is off", ()=>{
    airCon.increaseAcTemperature()
    const result = airCon.getTemp()
    expect(result).toBe(16);
    })



test("test that i can turn off the ac when it is on", ()=>{
    airCon.onAc()
    airCon.offAc()
    const result = airCon.isAcOn()
    expect(result).toBe(false);
})



test("test that i cannot decrease an ac if it is off", ()=>{
    airCon.decreaseAcTemperature()
    const result = airCon.getTemp()
    expect(result).toBe(16);
    })
