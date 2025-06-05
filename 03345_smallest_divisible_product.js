var smallestNumber = function(n, t) {
    do {
        const numArr = n.toString().split('').map(Number);
        if(n < 10 && n % t === 0) return n;
        if((numArr[0] * numArr[1]) % t === 0) return n;
        n++;
    } while (n <= 100);
};

var smallestNumberOptimized = function(n, t) {
    while (n <= 100) {
        const digits = n.toString().split('').map(Number);
        const product = digits.reduce((acc, cur) => acc * cur, 1);
        if (product % t === 0) return n;
        n++;
    }
};

console.log(smallestNumber(1, 1));
console.log(smallestNumberOptimized(1, 1));
