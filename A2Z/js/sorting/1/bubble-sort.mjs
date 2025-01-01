class Solution {
  // Function to sort the array using bubble sort algorithm.
  bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length - i; j++) {
        const prevJ = j - 1;

        if (arr[prevJ] > arr[j]) {
          const tmp = arr[j];
          arr[j] = arr[prevJ];
          arr[prevJ] = tmp;
        }
      }
    }

    return arr;
  }
}

export default Solution;
