const maxiArray = require("./maxiArray.js");

test("Find largest product", () => {
    let a = [-1, -5]
    let answer = maxiArray(a);
    
    expect(answer).toBe(5);
})