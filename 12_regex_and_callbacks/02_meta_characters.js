/*
Meta-Characters: Meta-Characters in Regex are special character that has a special meaning associated with them. Few of the most important ones are: 

\d — Match any digit character ( same as [0-9] ).
\w — Match any word character. A word character is any letter, digit, and underscore. (Same as [a-zA-Z0–9_] ) i.e alphanumeric character.
\s — Match a whitespace character (spaces, tabs, etc).
\t — Match a tab character only.
\b — Find a match at the beginning or end of a word. Also known as a word boundary.
. — (period) Matches any character except for the newline.
\D — Match any non-digit character (same as [^0–9]).
\W — Match any non-word character (Same as [^a-zA-Z0–9_] ).
\S — Match a non-whitespace character.


*/

// \d for digit characters
const digitRegex1 = /\d/; // containing any number
const digitRegex2 = /\d/g; // all numbers
const digitRegex3 = /^\d/; // starting with a number
const digitRegex4 = /\d{2}/; // for two consecutive numbers
const digitRegex5 = /\D/g; // all non-digits
const str1 = '120hello1world';

console.log(str1.match(digitRegex1)); // returns first number found
console.log(str1.match(digitRegex2)); // returns array of all digits
console.log(str1.match(digitRegex3)); // starting with a number
console.log(str1.match(digitRegex4)); // first occurence of two digit number
console.log(str1.match(digitRegex5));

console.log();


// ---------------------------------

// \w: for word character. same as [a-zA-Z0–9_]

const wordRegex1 = /\w/; // for first character
const wordRegex2 = /\w\s/; // for character just before first space
const wordRegex3 = /hello/; // checks for first occurence of hello
const wordRegex4 = /[aeiou]/g; // all occurences of aeiou
const wordRegex5 = /[A-Za-z]/
const str2 = "120 Times hello guys, I am good";

console.log(str2.match(wordRegex1)); // returns first character found
console.log(str2.match(wordRegex2)); // returns character before space
console.log(str2.match(wordRegex3));
console.log(str2.match(wordRegex4));
console.log(str2.match(wordRegex5));