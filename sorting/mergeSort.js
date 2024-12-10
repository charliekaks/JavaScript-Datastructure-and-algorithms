function merge(arr1, arr2){
    let mergedArr = [];
    let i = 0;
    let j = 0;

    while (i< arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]){
            mergedArr.push(arr1[i]);
            i++;
        } else{
            mergedArr.push(arr2[j]);
            j++;
        } 
    }

    while(i < arr1.length){
        mergedArr.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        mergedArr.push(arr1[j]);
        j++;
    }
    console.log(mergedArr)
    return mergedArr;
}

function mergeSort(array){
    if (array.length < 1) return array
    midpoint = Math.floor(array.length/2);
    left = mergeSort(array.slice(0,midpoint));
    right = mergeSort(array.slice(midpoint));
    return merge(left,right);
    
}

merge([1,12,40,120],[5,7,10])