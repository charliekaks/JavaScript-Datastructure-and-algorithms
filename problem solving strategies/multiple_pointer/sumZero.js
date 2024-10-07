function sumZero(array){
    left = 0;
    right = array.length-1;

    while(left < right){
        sum = array[left] - array[right];
        if(sum === 0){
            return [array[left],array[right]]
        }
        if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}