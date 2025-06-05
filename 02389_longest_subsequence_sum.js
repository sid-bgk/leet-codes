var answerQueries = function(nums, queries) {
    const longestSubsequence = [];
    for (let i = 0; i < queries.length; i++) {
        const maxSum = queries[i];

        let arr = nums;
        for (let j = 0; j < nums.length; j++) {
            const sum = arr.reduce((acc, currVal) => acc + currVal, 0);
            console.log({maxSum, sum, isTrue: sum <= maxSum})
            if(sum <= maxSum){
                break;
            }
            arr = arr.slice(1);
        }
        longestSubsequence.push(arr.length)

    }

    return longestSubsequence;
};