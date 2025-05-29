// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     let i=1, j=0;
//     while(i < nums.length){
//         if(nums[i] === nums[j]){
//             ++i;
//         }
//         else{
//             nums[++j] = nums[i++];
//         }
//     }
//     return j+1;
// };
// another logic

var removeDuplicates=function(nums) {
    if (nums.length === 0) return 0;
    
    let i = 1, j = 0;
    while (i < nums.length) {
        if (nums[i] !== nums[j]) {
            nums[++j] = nums[i];
            i++;
        } 
        else {
            i++;
        }
    }
    return j + 1;    
};
