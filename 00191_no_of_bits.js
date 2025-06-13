Rewrite the following function to achieve maximum time and space efficiency.
You may change the logic entirely as long as the final behavior and output remain correct.
Eliminate all redundant operations and optimize for the best possible performance.

After rewriting, summarize what the optimized function does, and list 2–4 key improvements or simplifications made.
Use a clear, bullet-point format like a code review comment.
var hammingWeight = function(n) {
    return n.toString(2).split('').reduce((acc, val) => acc + Number(val), 0);
};

console.log(hammingWeight(11)) // 3
console.log(hammingWeight(128)) // 1
console.log(hammingWeight(0)) // 0
console.log(hammingWeight(1)) // 1
console.log(hammingWeight(2)) // 1
console.log(hammingWeight(3)) // 2
console.log(hammingWeight(255)) // 8
console.log(hammingWeight(1023)) // 10
console.log(hammingWeight(2147483647)) // 31
console.log(hammingWeight(2147483645)) // 30
console.log(hammingWeight(4294967295)) // 32
console.log(hammingWeight(16)) // 1