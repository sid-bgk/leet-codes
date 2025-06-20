var sortArrayByParity = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0){
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            j++;
        }
    }
    return nums;
};

console.log(sortArrayByParity([3,1,2,4])); // [2,4,3,1]
console.log(sortArrayByParity([0])); // [0]
console.log(sortArrayByParity([1,3,5,7])); // [1,3,5,7]
console.log(sortArrayByParity([2,4,6,8])); // [2,4,6,8]
console.log(sortArrayByParity([1,2,3,4,5,6])); // [2,4,6,1,3,5]
console.log(sortArrayByParity([2,1])); // [2,1]
console.log(sortArrayByParity([1,2])); // [2,1]
console.log(sortArrayByParity([2,2,1,1])); // [2,2,1,1]
console.log(sortArrayByParity([5000,4999,0,1])); // [5000,0,4999,1]
console.log(sortArrayByParity([1])); // [1]
