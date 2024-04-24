const addIndex = require("./addIndex.js");

test("add one to last index", () => {
    let arr = [5, 2, 3, 1, 2]
    let answer = addIndex(arr);
    expect(answer).toEqual([5, 2, 3, 1, 3]);

})

