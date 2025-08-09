// https://leetcode.com/problems/power-of-two/

var isPowerOfTwo = function(n) {
    for (let i = 0; i <= 30; i++) {
        let ans = Math.pow(2, i);
        if (ans === n) {
            return true;
        }
    }
    return false;
};
