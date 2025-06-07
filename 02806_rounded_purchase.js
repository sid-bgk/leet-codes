var accountBalanceAfterPurchase = function(purchaseAmount) {
    const roundedAmount = Math.round(purchaseAmount / 10) * 10;
    return 100 - roundedAmount;
};

console.log(accountBalanceAfterPurchase(9))   // 90
console.log(accountBalanceAfterPurchase(15))  // 80
console.log(accountBalanceAfterPurchase(10))  // 90
console.log(accountBalanceAfterPurchase(0))   // 100
console.log(accountBalanceAfterPurchase(5))   // 90
console.log(accountBalanceAfterPurchase(4))   // 100
console.log(accountBalanceAfterPurchase(23))  // 80
console.log(accountBalanceAfterPurchase(27))  // 70
console.log(accountBalanceAfterPurchase(99))  // 0
console.log(accountBalanceAfterPurchase(41))  // 60