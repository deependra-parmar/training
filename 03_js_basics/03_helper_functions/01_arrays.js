let arr = [1, 2, 3, 4, 5, 6, 7]

// at()
console.log("Element at default index is: ", arr.at());
console.log("Element at 2nd index is: ", arr.at(2));
console.log();


// concat()
console.log("Concat a new array and returned: ", arr.concat([10, 20, 30, 40]));
console.log();


// pop: changes the original array and returns last removed element
console.log(arr.pop());

// push: adds element to end and changes the original array
console.log(arr.push(100));
console.log(arr);

// shift: removes the first element and changes the original array
console.log(arr.shift());
console.log(arr);

// unshift: adds new elements at the beginning of the array, changes the original array and return the length of the updated array
console.log(arr.unshift(1, 3, 5, 7, 9));
console.log(arr);

// splice: remove certain elements starting from an index
// arr.splice(2, 3) starting from index 2, remove 3 elements

// slice: used to get specific part of array so, slicing it
// newArr = arr.slice(1,4)

// fill: fill array with a value within a range
// arr.fill(100, 0, 100) from index 0 to 100, fill 10

// join: used to join elements of array using a delimiter(default ',')
// arr.join(' ')

// includes: whether value exists in array
// arr.includes(10) true if exists
// arr.includes(10,2) true if exists at index 2

// every: evaluates whether every element passes the evaluation callback function
console.log(arr.every(a => a > 10));

// some: evaluates whether any element passes the evaluation callback function
console.log(arr.some(a => a > 10));

// find: find returns the first element that passes the test
console.log(arr.find(a => a > 50));

// findIndex: findIndex returns the first element's index that passes the test
console.log(arr.findIndex(a => a > 50));

// filter: returns every element that passes the check
console.log();
console.log(arr);
console.log(arr.filter(a => a > 10));

// forEach: calls a callback for each element
total = 0
arr.forEach(a => total += a);
console.log(total);

// map: run callback on each element and returns new list
console.log(arr.map(a => a*2));
