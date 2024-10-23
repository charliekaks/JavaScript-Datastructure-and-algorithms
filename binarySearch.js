function binarySearch(array, value){
    start = 0;
    end = array.length -1;
    middle = Math.floor((start + end)/2);

    while(start  < end){
        if(value === array[middle]) return true
        if(value > array[middle]){
            start = middle +1;
        }else{
            end = middle - 1;
        }
        middle = Math.floor((start + end) / 2);        
    }
    return false;
}
console.log(binarySearch([34,51,1,2,3,45,56,687], 145))