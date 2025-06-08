var reorderSpaces = function(text) {
    const words = text.trim().split(/\s+/); // Split by one or more spaces
    const spaceCount = [...text].filter(c => c === ' ').length;

    const gaps = words.length - 1;
    const evenSpace = gaps > 0 ? Math.floor(spaceCount / gaps) : 0;
    const remainingSpace = gaps > 0 ? spaceCount % gaps : spaceCount;

    const spaceBetween = ' '.repeat(evenSpace);

    return words.join(spaceBetween) + ' '.repeat(remainingSpace);
};

console.log(reorderSpaces("  this   is  a sentence ")) // "this   is   a   sentence"
console.log(reorderSpaces(" practice   makes   perfect")) // "practice   makes   perfect "
console.log(reorderSpaces("hello   world")) // "hello   world"
console.log(reorderSpaces("  walks  udp package   into  bar a")) // "walks  udp  package  into  bar  a"
console.log(reorderSpaces("a")) // "a"
console.log(reorderSpaces("  a")) // "a  "
console.log(reorderSpaces("a  b c")) // "a b c "
console.log(reorderSpaces("     listen")) // "listen     "
console.log(reorderSpaces("zone")) // "zone"
console.log(reorderSpaces("one  two three  ")) // "one  two  three "