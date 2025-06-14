var validMountainArray = function(arr) {
  const n = arr.length;
  if (n < 3) return false;

  let i = 0;

  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
  }

  if (i === 0 || i === n - 1) return false;

  while (i + 1 < n && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === n - 1;
};

console.log(validMountainArray([2,1])) // false
console.log(validMountainArray([3,5,5])) // false
console.log(validMountainArray([0,3,2,1])) // true
console.log(validMountainArray([1,2,3,4,5])) // false
console.log(validMountainArray([5,4,3,2,1])) // false
console.log(validMountainArray([0,1,2,3,2,1])) // true
console.log(validMountainArray([0,1,2,3,3,2,1])) // false
console.log(validMountainArray([1,3,2])) // true
console.log(validMountainArray([1,2,3])) // false
console.log(validMountainArray([1,2,1,2])) // false
