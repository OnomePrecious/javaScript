//let number = [12, 3, 4, 5, 9, 4, 5];
//let numOne = [2, 3, 4]
//number.push(8);
//number.pop();
//number.unshift(3);
//number.shift();
//number.slice(3);
// console.log(number.slice(2,3));
//number.splice(2, 1, 2, 3);
//console.log(number.concat(numOne));
//console.log(number); 

// for each method in an array
let array = [1, 3, 4, 5, 6]
// let arr = [];

//array.forEach((num)=> { console.log(num * 2)})
//array.forEach((num) => { arr.push(num * 2)})
// console.log(arr);

// Map method in an array
//let answer = array.map((num) => num * 2)

//combining map and filter
let answer = array.filter(num => num % 2 == 0). map(num => num * 10)
console.log(answer)