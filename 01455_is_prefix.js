var isPrefixOfWord = function(sentence, searchWord) {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        if(words[i].startsWith(searchWord)) return i+1;
    }

    return -1;
};

console.log(isPrefixOfWord("i love eating burger", "burg")) // 4
console.log(isPrefixOfWord("this problem is an easy problem", "pro")) // 2
console.log(isPrefixOfWord("i am tired", "you")) // -1
console.log(isPrefixOfWord("hello world", "hell")) // 1
console.log(isPrefixOfWord("hello world", "wor")) // 2
console.log(isPrefixOfWord("a b c d", "c")) // 3
console.log(isPrefixOfWord("apple banana cherry", "ban")) // 2
console.log(isPrefixOfWord("prefix prefix prefix", "pre")) // 1
console.log(isPrefixOfWord("oneword", "one")) // 1
console.log(isPrefixOfWord("find the match at the end", "end")) // 6