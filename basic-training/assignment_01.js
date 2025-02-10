// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)
function secondLargest(array) {
    let max = -Infinity;
    let sec = -Infinity;
  
    for (let num of array) {
      if (num > max)
        max = num;

      if (num > sec && num < max)
        sec = num;
    }
  
    return sec;
}
