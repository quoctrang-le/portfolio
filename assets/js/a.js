// write a function `isStrictlyEqual(a, b) {}` that returns the same value as a === b. Your implementation must not use the === or !== operators.

// // test cases
// isStrictlyEqual(0, -0) => true
// //isStrictlyEqual(1, -1) => false
// isStrictlyEqual(NaN, NaN) => false
// isStrictlyEqual(true, true) => true

function isStriclyEqual(a, b) {
    return (typeof a == typeof b) && (a == b)
}

console.log(isStriclyEqual(-1, '-1'))