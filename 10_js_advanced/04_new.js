/* Default behaviour of JS is prototypal behavior. When you ask JS for something, it keeps finding the property asked to the highest chain of prototype possible until it gets a NULL.
*/

function mulBy5(num){
    return num*5;
}

mulBy5.power = 10; // functions is also a function and object ---> functional object

console.log(mulBy5(10));
console.log(mulBy5.power);
console.log(mulBy5.prototype); // returns {}

function createUser(username, email, score){
    this.username = username;
    this.email = email;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.print = function(){
    console.log(`Username is: ${this.username}`);
    console.log(`Email is: ${this.email}`);
    console.log(`Score is: ${this.score}`);
}

const user1 = new createUser("hello", "hello@gmail.com", 10);
const user2 = new createUser("world", "world@gmail.com", 15);

user1.print();

/*
What does new keyword does?
    1. A new JS object is created
    2. The newly created object is linked with the prototype of the constructor function's prototype.
    3. Then, the constructor function is called with arguments bound to newly created object.
    4. After the constructor is called, the newly created object is returned to the user in the variable.

*/