/*
Write a regex pattern that matches the password

Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Character. ( period, dot or full stop) provided that it is not the first or last character and it will not come one after the other.

*/

const passwordRegex = /^(?![.])(?=.*\d)(?=.*[@!#$%&'*+-/=?^_'{|}~])(?=.*[a-z])(?=.*[A-Z]).{8,}[^.]$/;

const string = "Deependra@#123"

console.log(passwordRegex.test(string));
