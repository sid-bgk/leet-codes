var expect = function(val) {
    return {
        toBe(toCompare) {
            if (val === toCompare) return true;
            throw new Error("Not Equal");
        },
        notToBe(toCompare) {
            if (val !== toCompare) return true;
            throw new Error("Equal");
        }
    };
};

console.log(expect(42).toBe(42)) // true

try {
    expect(42).toBe("42"); // throws "Not Equal"
} catch (e) {
    console.log(e?.message) // { e: Error: Not Equal }
}

console.log(expect("hello").notToBe("world")) // true

try {
    expect("test").notToBe("test"); // throws "Equal"
} catch (e) {
    console.log(e?.message) // { e: Error: Equal }
}

console.log(expect(null).toBe(null)) // true

try {
    expect(null).notToBe(null); // throws "Equal"
} catch (e) {
    console.log(e?.message) // { e: Error: Equal }
}

console.log(expect(undefined).toBe(undefined)) // true

try {
    expect(undefined).toBe(null); // throws "Not Equal"
} catch (e) {
    console.log(e?.message) // { e: Error: Not Equal }
}

console.log(expect(true).notToBe(false)) // true

console.log(expect(0).toBe(0)) // true