function split(wholeArray) {
    const midIndex = Math.ceil(wholeArray.length / 2)
    const firstHalf = wholeArray.slice(0, midIndex) // returns an array
    const secondHalf = wholeArray.slice(midIndex)
    return [firstHalf, secondHalf];
}

function merge(array) {
    return [array[0].concat(array[1])];
}