// Write a regex pattern that verifies Credit Card pattern

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
const amexpRegEx = /^(?:3[47][0-9]{13})$/;
const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

const visaNumber = '4195638576232865'
const masterCardNumber = '5148675645354626'
const amexNumber = '347849351068368'
const discNumber = '6011895046387610'

console.log(`${visaNumber} for Visa validation returns: `, visaRegEx.test(visaNumber));
console.log(`${masterCardNumber} for Visa validation returns: `, visaRegEx.test(masterCardNumber));
console.log();

console.log(`${masterCardNumber} for Mastercard validation returns: `, mastercardRegEx.test(masterCardNumber));
console.log(`${visaNumber} for Mastercard validation returns: `, mastercardRegEx.test(visaNumber));
console.log();

console.log(`${amexNumber} for American Express validation returns: `, amexpRegEx.test(amexNumber));
console.log(`${visaNumber} for American Express validation returns: `, amexpRegEx.test(visaNumber));
console.log();

console.log(`${discNumber} for Discover validation returns: `, discovRegEx.test(discNumber));
console.log(`${amexNumber} for Discover validation returns: `, discovRegEx.test(amexNumber));
console.log();