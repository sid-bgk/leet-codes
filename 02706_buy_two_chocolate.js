var buyChoco = function(prices, money) {
    let min1 = Infinity, min2 = Infinity;

    // Single-pass scan to find the two lowest prices
    for (const price of prices) {
        if (price < min1) {
            min2 = min1;
            min1 = price;
        } else if (price < min2) {
            min2 = price;
        }
    }

    const total = min1 + min2;
    return total <= money ? money - total : money;
};

console.log(buyChoco([1,2,2], 3)) // 0
console.log(buyChoco([3,2,3], 3)) // 3
console.log(buyChoco([1,1], 2)) // 0
console.log(buyChoco([2,2,2], 3)) // 3
console.log(buyChoco([5,6,7,8], 10)) // 10
console.log(buyChoco([1,2,3,4,5], 5)) // 2
console.log(buyChoco([1,2,3], 10)) // 7
console.log(buyChoco([10,10,10], 15)) // 15
console.log(buyChoco([2,3,5,8], 7)) // 2
console.log(buyChoco([4,1,2], 4)) // 1
console.log(buyChoco([98,54,6,34,66,63,52,39], 62)) //22
