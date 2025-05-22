// https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/

var countSubarrays = function (nums) {
    const n = nums.length;
    let ans = 0;
    for (let i = 1; i < n - 1; ++i) {
        if (nums[i] === (nums[i - 1] + nums[i + 1]) * 2) {
            ++ans;
        }
    }
    return ans;
};