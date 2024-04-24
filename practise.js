// the code below is a nested function.
// function calc(x){
//     function secondNumber(a){
//         return a * x;
//     }
//     return secondNumber;
// }
// let result = calc(3);
// console.log(result(2));


//the code below is an arrow function.
//const calc = (x) => {
//   function secondNumber(a){
//         return a * x;
//     }
//     return secondNumber;
// }
// console.log(calc(3)(2));


//the code below is a function as an argument.
// function higherOrderFunction(func){
//     console.log("higher function")
//     func();
// }
// function lowerOrderFunction(){
//     console.log("lower function")
// }
// higherOrderFunction(lowerOrderFunction);

// function higherOrderFunction(lowerFunction){
//     console.log("higher function")
//     lowerFunction();
// }

// higherOrderFunction(() => {
//     console.log("lower function")

// });

function greetings(greet){
    return function person(name){
        return `Hello, ${name}. ${greet}`;

    }
}
console.log(greetings("Good morning!") ("Precious"));