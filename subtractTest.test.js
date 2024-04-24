let subtractNumbers = require("./subtract.js")

test("Subtract two numbers", () => {
    let a = 35;
    let b = 15;
    let answer = subtractNumbers(a, b);
    
    expect(answer).toBe(20);
})