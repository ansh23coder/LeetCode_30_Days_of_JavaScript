// https://leetcode.com/problems/sum-of-two-integers/

var getSum = function(a, b) {
    while (b !== 0) {
        let carry = a & b;     // Calculate carry
        a = a ^ b;             // Sum without carry
        b = carry << 1;        // Shift carry to add in next iteration
    }
    return a;
};
