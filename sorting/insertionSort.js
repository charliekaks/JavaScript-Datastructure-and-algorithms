function insertionSort(arr){
    for (let i =1; i < arr.length; i++) {
        let currentValue = arr[i];
        for(var j = i-1; j>=0 && arr[j] > currentValue; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentValue;
    }
    console.log(arr);
    return arr
}
insertionSort([7,3,2,24,5,19])