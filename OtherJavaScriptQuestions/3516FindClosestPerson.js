// https://leetcode.com/problems/find-closest-person/


function findClosest(x, y, z) {
    const dist1 = Math.abs(x - z);
    const dist2 = Math.abs(y - z);

    if (dist1 < dist2) return 1;
    if (dist2 < dist1) return 2;
    return 0;
}
