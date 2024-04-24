let studentGrade = require("./grade.js")

test("convert scores to letter grades", () => {
    let arr = [95, 78, 85, 60, 45, 92];
    let answer = studentGrade(arr);
    expect(answer).toEqual(["A", "C", "B", "D", "F", "A"])
});


