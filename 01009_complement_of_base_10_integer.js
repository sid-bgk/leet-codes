var bitwiseComplement = function(n) {
    if (n === 0) return 1;

    let mask = (1 << n.toString(2).length) - 1;
    return n ^ mask;
};

console.log(bitwiseComplement(0)) // 1
console.log(bitwiseComplement(1)) // 0
console.log(bitwiseComplement(2)) // 1
console.log(bitwiseComplement(5)) // 2
console.log(bitwiseComplement(7)) // 0
console.log(bitwiseComplement(10)) // 5
console.log(bitwiseComplement(100)) // 27
console.log(bitwiseComplement(12345)) // 4038
console.log(bitwiseComplement(255)) // 0
console.log(bitwiseComplement(1023)) // 0