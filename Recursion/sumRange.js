//Recurcively add up all the numbers from a given number given as input.
function sumRange(num){
    if (num === 1 )return 1;
    return num + sumRange(num-1);
}

//A function that returns the factorial of a number given the number as an input
function factorial(num){
    if(num === 1) return 1
    return num * factorial(num-1);
}