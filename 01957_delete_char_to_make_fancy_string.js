var makeFancyString = function(s) {
    const result = [];
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        if (count < 3) {
            result.push(s[i]);
        }
    }

    return s[0] + result.join('');
};

console.log(makeFancyString("leeetcode")) // "leetcode"
console.log(makeFancyString("aaabaaaa")) // "aabaa"
console.log(makeFancyString("aab")) // "aab"
console.log(makeFancyString("aaa")) // "aa"
console.log(makeFancyString("a")) // "a"
console.log(makeFancyString("abc")) // "abc"
console.log(makeFancyString("aaaaa")) // "aa"
console.log(makeFancyString("aabbaaaabbb")) // "aabbaaabb"
console.log(makeFancyString("abababababa")) // "abababababa"
console.log(makeFancyString("xxxyyyzzz")) // "xxyyzz"
console.log(makeFancyString("ppppqqqrrr")) // "ppqqrr"
console.log(makeFancyString("aabbccddeeffgghh")) // "aabbccddeeffgghh"
console.log(makeFancyString("bbbaaabbbaaa")) // "bbaabbbaa"
