const binarySearch = (arr: number[], target: number): number => {
  let low = 0;
  let high = arr.length - 1;
  let output = -1;
  while (low <= high) {
    let mid = (low + high) >> 1;
    if (arr[mid] === target) {
      output = mid;
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return output;
};

export default binarySearch;
