var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        count += n & 1;
        n >>>= 1;
    }
    return count;
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