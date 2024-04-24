let left_operand = 250;
let right_operand = 50;
let operator = null;
let ans = 0;
if(operator == "+"){
    ans = left_operand + right_operand;
}else if(operator == "-"){
    ans = left_operand - right_operand;
} else if(operator == "*"){
    ans = left_operand * right_operand;
}else if(operator == "/"){
    ans = left_operand / right_operand;
}else{
ans = NaN;
}
console.log(left_operand / right_operand);