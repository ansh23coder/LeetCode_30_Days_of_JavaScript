// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
    let startingPosition = -1;
    let endingPosition = -1;
    let n = nums.length;

    // Find first occurrence -
    for (let i = 0; i < n; i++) {
        if (nums[i] === target) {
            startingPosition = i;
            break;
        }
    }
    // Find last occurrence - 
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] === target) {
            endingPosition = i;
            break;
        }
    }
    return [startingPosition, endingPosition];
};