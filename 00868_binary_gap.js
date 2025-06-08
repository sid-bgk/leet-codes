var binaryGap = function(n) {
    const binaryNum = n.toString(2);
    let longestGap = 0;
    let consecutiveCount = 0;

    for (const binaryNumElement of binaryNum) {
        if(binaryNumElement === '1'){
            if(consecutiveCount > longestGap) longestGap = consecutiveCount;
            consecutiveCount = 1;
        }else if(binaryNumElement === '0'){
            consecutiveCount++;
        }
    }

    return longestGap;
};

console.log(binaryGap(22)) // 2
console.log(binaryGap(8)) // 0
console.log(binaryGap(5)) // 2
console.log(binaryGap(6)) // 1
console.log(binaryGap(1)) // 0
console.log(binaryGap(9)) // 3
console.log(binaryGap(529)) // 5
console.log(binaryGap(1041)) // 6
console.log(binaryGap(15)) // 1
console.log(binaryGap(1610612736)) // 1