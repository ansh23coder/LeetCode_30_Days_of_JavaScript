// https://leetcode.com/problems/search-a-2d-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || !matrix[0]) return false;
    
    let r = 0, c = matrix[0].length - 1;
    
    while (r < matrix.length && c >= 0) {
        if (matrix[r][c] === target) return true;
        else if (matrix[r][c] < target) r++;
        else c--;
    }
    return false;
};
