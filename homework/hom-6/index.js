const binarySearch = (arr, findItem) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] === findItem) {
        return mid;
      }

      if (arr[mid] < findItem) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return -1;
  };

const arr = [1,2,4,5,78,654,788,789,1234]

console.log(binarySearch(arr, 41));