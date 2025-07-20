// https://leetcode.com/problems/sort-colors/description/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const freq = [0, 0, 0];

    for(const num of nums){
        freq[num]++;
    }

    let index = 0;
    
    for(let i=0; i<3; i++){
        for(let j=0; j<freq[i]; j++){
            nums[index++] = i;
        }
    }
};

