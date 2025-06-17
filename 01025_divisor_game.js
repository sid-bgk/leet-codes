const divisorGame = n => (n & 1) === 0;

console.log(divisorGame(1)) // false
console.log(divisorGame(2)) // true
console.log(divisorGame(3)) // false
console.log(divisorGame(4)) // true
console.log(divisorGame(5)) // false
console.log(divisorGame(10)) // true
console.log(divisorGame(15)) // false
console.log(divisorGame(20)) // true
console.log(divisorGame(999)) // false
console.log(divisorGame(1000)) // true