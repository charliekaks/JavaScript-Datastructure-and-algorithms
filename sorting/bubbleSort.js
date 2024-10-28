function swap(i,j){
    
}
function bubbleSort(array){
    for(let i = array.length; i>0; i--){
        
        for(let j= 0; j< i-1;j++){
            console.log(array);
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j]= array[j+1];
                array[j+1] = temp;
            }
        }
        console.log("one pass complete");
    }
    console.log(array)
    return array;
}
bubbleSort([9,12,7,88,10,16])