// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
    let ans = {};
  
    for (let char of string) {
      if (/[a-z]/.test(char)) {
        ans[char] = (ans[char] || 0) + 1;
      }
    }
  
    return ans;
}