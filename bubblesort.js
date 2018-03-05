const swap = function (array, i) { 
    if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
    }
}

function bubbleSort(array) {
    if (array.length < 2) {
        return array;
    } else {
        console.log(array)
        for (let j = 0; j < array.length; j++) {
            for (let i = 0; i < array.length - 1; i++) {
                swap(array, i);
            }
        }
    }
    console.log(array)
    return array;
}
