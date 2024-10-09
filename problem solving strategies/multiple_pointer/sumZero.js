/**
 * 
This approach involves creating pointers  or values corresponding to indexes or positions and move
towards the beginning, middle and end based on a certain condition. 
 */
//Write a function called sumZero, which accepts  a sorted array of integers. The function should find the first pair where the sum is zero. Return an array that includes both values.
function sumZero(array){
    left = 0;
    right = array.length-1;

    while(left < right){
        sum = array[left] - array[right];
        if(sum === 0){
            return [array[left],array[right]]
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}