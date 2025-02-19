/*
    Constructor Function is a function that is used to create an object and in order to force return the object, new keyword is used.
*/

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.returnUser = function(){
    return { username: this.username, email: this.email, password: this.password };
}

const user = new User("deependraparmar", "dp@gmail.com", "hello@1234");
console.log(user);
console.log(user.returnUser());

console.log();
console.log(typeof user, typeof user.returnUser());
