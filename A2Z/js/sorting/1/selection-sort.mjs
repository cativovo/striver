// https://www.geeksforgeeks.org/problems/selection-sort/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=selection-sort
class Solution {
  /**
   * @param {number[]} arr
   * @returns {number[]}
   */

  // Function to implement selection sort
  selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      // find index of min
      let minI = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minI]) {
          minI = j;
        }
      }

      //swap
      const tmp = arr[i];
      arr[i] = arr[minI];
      arr[minI] = tmp;
    }

    return arr;
  }
}

export default Solution;
