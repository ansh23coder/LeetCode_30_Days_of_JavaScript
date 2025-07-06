// https://leetcode.com/problems/find-lucky-integer-in-an-array/ 


var findLucky = function(arr) {
    const freq = {};

    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let lucky = -1;

    for (const key in freq) {
        const num = parseInt(key);
        if (freq[key] === num) {
            lucky = Math.max(lucky, num);
        }
    }

    return lucky;
};