var largestInteger = function (num) {
    const digits = num.toString().split('').map(Number);
    const odds = digits.filter(d => d % 2).sort((a, b) => b - a);
    const evens = digits.filter(d => d % 2 === 0).sort((a, b) => b - a);

    return Number(
        digits
            .map(d => (d % 2 ? odds.shift() : evens.shift()))
            .join('')
    );
};

console.log(largestInteger(1234)) // 3412
console.log(largestInteger(65875)) // 87655
console.log(largestInteger(1)) // 1
console.log(largestInteger(2222)) // 2222
console.log(largestInteger(13579)) // 97531
console.log(largestInteger(86420)) // 86420
console.log(largestInteger(1023)) // 3012
console.log(largestInteger(907856341)) // 987654301
console.log(largestInteger(1000000000)) // 1000000000
console.log(largestInteger(31415926)) // 95631142

