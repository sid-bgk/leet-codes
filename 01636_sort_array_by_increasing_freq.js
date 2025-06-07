var frequencySort = function(nums) {
    const freqCount = {};
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        freqCount[currNum] = freqCount[currNum] ? freqCount[currNum] + 1 : 1;
    }

    const ordered = new Map(
      Object.keys(freqCount)
        .sort((a, b) => Number(b) - Number(a)) // sort numerically descending
        .map(key => [key, freqCount[key]])
    );

    const sortedByValueAsc = new Map(
      [...ordered.entries()].sort((a, b) => a[1] - b[1])
    );

    const sortedByFrequency = [];

    for (const [key, value] of sortedByValueAsc) {
        for (let i = 0; i < value; i++) {
            sortedByFrequency.push(Number(key))
        }
    }

    return sortedByFrequency;
};



console.log(frequencySort([1,1,2,2,2,3])) // [3,1,1,2,2,2]
console.log(frequencySort([2,3,1,3,2])) // [1,3,3,2,2]
console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1])) // [5,-1,4,4,-6,-6,1,1,1]
console.log(frequencySort([4,4,4,4])) // [4,4,4,4]
console.log(frequencySort([1])) // [1]
console.log(frequencySort([5,7,5,7,5,7,1])) // [1,7,7,7,5,5,5]
console.log(frequencySort([-2,-2,-2,3,3,1])) // [1,3,3,-2,-2,-2]
console.log(frequencySort([100,-100,100,100,-100,50])) // [50,-100,-100,100,100,100]
console.log(frequencySort([0,1,2,3,4,5])) // [5,4,3,2,1,0]
console.log(frequencySort([9,9,8,8,7,7,6,6])) // [6,6,7,7,8,8,9,9]