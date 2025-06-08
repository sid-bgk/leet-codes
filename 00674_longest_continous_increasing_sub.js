var findLengthOfLCIS = function(nums) {
    if (nums.length === 0) return 0;

    let maxLen = 1, currLen = 1;

    for (let i = 1; i < nums.length; i++) {
        currLen = nums[i] > nums[i - 1] ? currLen + 1 : 1;
        maxLen = Math.max(maxLen, currLen);
    }

    return maxLen;
};

console.log(findLengthOfLCIS([1,3,5,4,7])) // 3
console.log(findLengthOfLCIS([2,2,2,2,2])) // 1
console.log(findLengthOfLCIS([1])) // 1
console.log(findLengthOfLCIS([1,2,3,4,5])) // 5
console.log(findLengthOfLCIS([5,4,3,2,1])) // 1
console.log(findLengthOfLCIS([1,3,5,7,6,8,9,10])) // 4
console.log(findLengthOfLCIS([10,9,2,5,3,7,101,18])) // 3
console.log(findLengthOfLCIS([1,3,2,4,6,1,2,3,4])) // 4
console.log(findLengthOfLCIS([100,101,102,50,51,52,53])) // 4
console.log(findLengthOfLCIS([1,2,2,3,4,1])) // 3