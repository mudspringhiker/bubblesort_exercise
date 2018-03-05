function bubbleSort(array) {
    
    const swap = function (num1, num2) {
        let temp = num1;
        let temp2 = num2;
        if (num1 > num2) {
            array[i] = temp2;
            array[i+1] = temp;
        }
    }

    for (let i = 0; i < array.length - 1; i++) {
        swap(array[i], array[i+1]);
    }
    return array;  
  }



[ ]