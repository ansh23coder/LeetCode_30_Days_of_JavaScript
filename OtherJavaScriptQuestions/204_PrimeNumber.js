// https://leetcode.com/problems/count-primes/description/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n == 0) return 0;
    const prime = new Array(n).fill(true);
    prime[0] = prime[1] = false;
    let ans = 0;

    for(let i=2; i<n; i++){
        if(prime[i]){
            ans++;
            for(let j=2*i; j<n; j+=i){
                prime[j] = false;
            }
        }
    }
    return ans;
};