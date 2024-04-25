 const addIndex = require("./addIndex.js");

test("add one to last index", () => {
    let numbers = [5, 2, 3, 1, 2]
    let answer = addIndex(numbers);
     expect(answer).toEqual([5, 2, 3, 1, 3]);

 })

