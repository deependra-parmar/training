// Write a regex pattern to match the valid email address

const emailValidator = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/

const email1 = "dparmar@gmail.com";
const email2 = "h@c.co"
const email3 = "hello@mail.com"
const email4 = "improper-email.com"

console.log(emailValidator.test(email1));
console.log(emailValidator.test(email2));
console.log(emailValidator.test(email3));
console.log(emailValidator.test(email4));