// https://leetcode.com/problems/join-two-arrays-by-id/


// code: 
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */


var join = function(arr1, arr2) {
    let result = {};

    arr1.forEach(obj => {
        result[obj.id] = { ...result[obj.id], ...obj };
    });

    arr2.forEach(obj => {
        result[obj.id] = { ...result[obj.id], ...obj };
    });

    return Object.values(result).sort((a, b) => a.id - b.id);
};