// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // my solution
    // let chunkedArr = [];
    // let count = 1;
    // let innerArr = []

    // for (let i = 0; i < array.length; i++) {
    //   if (count === 1) {
    //     innerArr = [(array[i])];
        
    //     if (i === array.length) {
    //       chunkedArr.push(innerArr);
    //     }

    //     if (count === size) {
    //       chunkedArr.push(innerArr);
    //     } else {
    //       count++;
    //     }
    //   } else if (count === size && i !== array.length) {
    //     innerArr.push(array[i]);
    //     chunkedArr.push(innerArr);
    //     count = 1;
    //   } else if (i === array.length - 1) {
    //     innerArr.push(array[i]);
    //     chunkedArr.push(innerArr);
    //   } else {
    //     innerArr.push(array[i]);
    //     count++;
    //   }
    // }

    // return chunkedArr;

  // video solution #1
    // let chunked = [];

    // for (let element of array) {
    //   const last = chunked[chunked.length - 1];

    //   if (!last || last.length === size) {
    //     chunked.push([element]);
    //   } else {
    //     last.push(element);
    //   }
    // }

    // return chunked;

  // video solution #2
    let chunked = [];
    let index = 0;

    while (index < array.length) {
      chunked.push(array.slice(index, index + size))
      index += size;
    }

    return chunked

}

module.exports = chunk;
