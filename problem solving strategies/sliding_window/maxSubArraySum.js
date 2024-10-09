/**
 * This pattern involves creating a window which can either be an array or a number from one position to another
 * Depending on a certain condition, the window either increases or closes. 
 * Very useful for keeping track as a subset of data in an array.
 */
//An example is writing a function that accepts an array of integers and a number
//and returns the maximum sum of n consequtive numbers in the array

function maxSubArraySum(array, number){
    maxSum = 0;
    tempSum = 0;
    if(array.length === 0){
        return null;
    }
    for(let i = 0; i<number; i++){
        maxSum += array[i];
    }
    tempSum = maxSum;
    for(let i = number; i < array.length; i++){
        tempSum = tempSum + array[i] - array[i-number];
        maxSum = Math.max(maxSum, tempSum);
    }
    console.log(maxSum);
    return maxSum;
}

maxSubArraySum([1,2,3,4,5,3,2,8], 2);