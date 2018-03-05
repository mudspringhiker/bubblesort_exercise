function split(wholeArray) {
    const midIndex = Math.ceil(wholeArray.length / 2)
    const firstHalf = wholeArray.slice(0, midIndex) // returns an array
    const secondHalf = wholeArray.slice(midIndex)
    return [firstHalf, secondHalf];
}

function merge(array1, array2) { // array with two arrays inside

}

function mergeSort(arrayToBeSorted) {
    if (arrayToBeSorted.length <= 1) {
        return arrayToBeSorted;
    } else {
        let splitArrayFirst = split(arrayToBeSorted)[0];
        let splitArraySecond = split(arrayToBeSorted)[1];
        return merge(mergeSort(splitArrayFirst), mergeSort(splitArraySecond));      
    }
}
