var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let currentMaxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]) {
            currentMaxCount++;
        }
        else {
            currentMaxCount = 0;
        }


        if(currentMaxCount > maxCount){
            maxCount = currentMaxCount;
        }
    }

    return maxCount;
};

var findMaxConsecutiveOnes_Optimized = function(nums) {
    let maxCount = 0, count = 0;

    for (const num of nums) {
        count = num === 1 ? count + 1 : 0;
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]))          // 2
console.log(findMaxConsecutiveOnes_Optimized([1, 0, 1, 1, 0, 1]))          // 2