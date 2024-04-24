const num = 2;

function exampleFunction() {
    let lastName = "Ugbo"; // function scope,it cannot be accessed outside the functionu 
    if(true){
        let firstName = "Chinedu"; // block scope, it cannot be accessed outside the block
        console.log("I print from if block", num);
        console.log("I print from if block", firstName);
        console.log("I print from if block", lastName);
    }
    console.log("I print from function scope", num);
    console.log("I print from function scope", lastName);


}
console.log("I print from outside the function", num);

exampleFunction();