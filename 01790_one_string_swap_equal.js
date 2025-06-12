var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true;
    if (s1.length !== s2.length) return false;

    const diff = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diff.push(i);
            if (diff.length > 2) return false;
        }
    }

    return (
        diff.length === 2 &&
        s1[diff[0]] === s2[diff[1]] &&
        s1[diff[1]] === s2[diff[0]]
    );
};

console.log(areAlmostEqual("bank", "kanb")) // true
console.log(areAlmostEqual("attack", "defend")) // false
console.log(areAlmostEqual("kelb", "kelb")) // true
console.log(areAlmostEqual("abcd", "abdc")) // true
console.log(areAlmostEqual("abcd", "acbd")) // true
console.log(areAlmostEqual("aa", "aa")) // true
console.log(areAlmostEqual("ab", "ba")) // true
console.log(areAlmostEqual("caa", "aaz")) // false
console.log(areAlmostEqual("abab", "baba")) // false
console.log(areAlmostEqual("aaaa", "aaab")) // false
console.log(areAlmostEqual("siyolsdcjthwsiplccjbuceoxmpjgrauocx", "siyolsdcjthwsiplccpbuceoxmjjgrauocx")) // true
