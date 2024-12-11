//Swap functionality to swap to elements in the array given the array and the two positions.
function swap(array, i, j){
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

//the function picks the first element, and places it in its sorted position where all the elements to the left
// are smaller than it and all the elements to the right are larger. Then it returns the position of the selected element in the array.
function pivotFunction(array, start=0, end = array.length-1){
    pivot = array[start];
    swapIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if(pivot > array[i]){
            swapIndex++;
            swap(array, i, swapIndex);
        }
    }
    swap(array, start, swapIndex);
    console.log(array);
    return swapIndex;
}

//Recursive function to sort the array.
function quickSort(arr, left=0 , right = arr.length-1){
    if(left < right){ //base case to make sure the recursive calls end.
    let pivotPoint = pivotFunction(arr, left, right); // Finding the pivot and placing first element to in sorted position.
    quickSort(arr, left, pivotPoint-1);// Recursively sort the left side
    quickSort(arr, pivotPoint+1, right);// Recursively sort the right side
    }
    return arr; // return sorted array.
}

quickSort([7,3,2,24,5,19]);