let Rectangle = require("./shape.js");

    
test("test rectangle", ()=>{
    let value = new Rectangle("Rectangle", 10, 20);
    let area = value.getArea();
    let isSquare = value.isSquare();
    expect(area).toEqual(200);
    expect(isSquare).toBe(false);

})