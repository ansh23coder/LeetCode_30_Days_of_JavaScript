// https://leetcode.com/problems/array-wrapper/


// using loops to implement valueOf and toString methods
class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }
    valueOf() {
        let sum = 0;
        for (let i = 0; i < this.nums.length; i++) {
            sum += this.nums[i];
        }
        return sum;
    }
    toString() {
        let str = '[';
        for (let i = 0; i < this.nums.length; i++) {
            str += this.nums[i];
            if (i !== this.nums.length - 1) {
                str += ',';
            }
        }
        str += ']';
        return str;
    }
}
/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
