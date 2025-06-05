// https://leetcode.com/problems/is-object-empty/


/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
// method 1:
var isEmpty = function(obj) {
  return Object.keys(obj).length === 0
};

// method 2:
var isEmpty = function(obj) {
    for (const _ in obj) return false;
    return true;
};