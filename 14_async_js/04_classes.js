/*
    Class: Classes server as functions in JS, ultimately classes are objects because all functions are also objects in JS. So, class is like a special function in JS.
    Class is Just a SYNTACTIC SUGAR on the top of JS's old prototypal inheritance. 

    ES6 provides a more better syntax to define Constructor Function using class keyword.

    Constructor: Used to create/instantiate an object of a class with initial values. Good thing about constructor in JS is that a class can have only one constructor.

    Super(): method used to invoke the constructor of the parent class and set properties of it.

    You can't instantiate a class without new keyword


*/


const User = class{     // Class Expression in JS
    #password = "";

    constructor(username, email){
        this.id = User.generateId();
        this.username = username;
        this.email = email;
    }

    get getPassword(){
        return this.#password;
    }

    set setPassword(password){
        this.#password = password;
    }

    static generateId = () => {
        return Math.floor(Math.random()*100);
    }

    // private method of a class. Cannot be accessed via an object and is only availabe inside the class for performing a abstract operation.
    #assignRole = () => {
        if(this.id >= 50)
            this.role = "Super Coder"
        else
            this.role = "Coder"
    }

    assignRoleController = () => this.#assignRole();

    returnUser = () => {
        const {id, username, email, role} = this;
        return {id, username, email,password: this.#password, role};
    }
}

// creating the new user and getting the user
const user = new User("deependraparmar", "dp@gmail.com");
user.setPassword = "hey@1234";
user.assignRoleController();
console.log(user.returnUser());

// checking the type of the class and the object
console.log();
console.log(User.prototype);

console.log("Type of class: ", typeof User); // gives function
console.log("Type of object: ", typeof user, typeof user.returnUser()); // object object