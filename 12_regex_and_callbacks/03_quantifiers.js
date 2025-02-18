/*
    * : Matches zero or more occurences
    + : Matches one or more occurences
    ? : Matches zero or one occurence
    {n}: Matches exactly one occurence
    {n,m}: Matches occurence(s) between n and m 
*/

const string = "Hey there, I have 10 notes of 50 rupees, 20 notes of 100 rupees, 30 notes of 200 rupees and 50 notes of 500 rupeees. "

const plusRegex = /\d+/g // zero or more occurences of numbers
console.log(string.match(plusRegex));