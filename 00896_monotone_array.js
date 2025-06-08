var isMonotonic = function(nums) {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            decreasing = false;
        } else if (nums[i] < nums[i - 1]) {
            increasing = false;
        }
    }

    return increasing || decreasing;
};

console.log(isMonotonic([1,2,2,3])) // true
console.log(isMonotonic([6,5,4,4])) // true
console.log(isMonotonic([1,3,2])) // false
console.log(isMonotonic([5])) // true
console.log(isMonotonic([10,10,10,10])) // true
console.log(isMonotonic([1,2,3,4,5])) // true
console.log(isMonotonic([9,7,5,3,1])) // true
console.log(isMonotonic([1,2,3,2,1])) // false
console.log(isMonotonic([3,3,2,2,1])) // true
console.log(isMonotonic([1,1,1,2,1])) // false