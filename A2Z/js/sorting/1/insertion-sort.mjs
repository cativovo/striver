class Solution {
  // Please change the array in-place
  insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let j = i;
      while (j > 0 && arr[j] < arr[j - 1]) {
        const tmp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = tmp;
        j--;
      }
    }

    return arr;
  }
}

export default Solution;
