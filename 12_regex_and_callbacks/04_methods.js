const string = "Hey there 3000, I am fine 40000"

// test(): checks if the pattern exists and return boolean output
console.log("Test: ", /[a-zA-Z][0-9]+/.test(string));

// exec(): returns the matched text and additional information
console.log("Exec: ", /\d+/g.exec(string));

// match(): returns the array of values which pass the test with additional info.
console.log("Match: ", string.match(/\d+/g));

// replace(): replace a pattern with another string
console.log("Replace: ", string.replace(/ /g, '_@_'));

// split(): splits string into arrays based on regular expression pattern
console.log("Split: ", string.split(/\d+/g));