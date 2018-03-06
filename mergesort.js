function split(wholeArray) {
    const midIndex = Math.ceil(wholeArray.length / 2)
    const firstHalf = wholeArray.slice(0, midIndex) // returns an array
    const secondHalf = wholeArray.slice(midIndex)
    return [firstHalf, secondHalf];
}

function merge(array1, array2) { // array with two arrays inside
    let subArr = [];
    while ((array1.length > 0) && (array2.length > 0)) {
        if (array1[0] < array2[0]) {
            subArr.push(array1[0]);
            array1 = array1.slice(1);
        } else {
            subArr.push(array2[0])
            array2 = array2.slice(1);
        }
    }
    subArr = subArr.concat(array1).concat(array2);
    return subArr;
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    } else {
        let splitArrayFirst = split(array)[0];
        let splitArraySecond = split(array)[1];
        return merge(mergeSort(splitArrayFirst), mergeSort(splitArraySecond));      
    }
}
