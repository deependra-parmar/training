/*
This: reference of the current object with which, the function is called
*/

let introduce = () => {
    console.log(this);
    console.log("Namaste Devs!");
}

let obj = {
    name: "Deependra",
    age: 20,
    introduce: function(){
        console.log("This contains: ", this);
        console.log(`Hey there, I am ${this.name}, ${this.age} years old`);
    }
}

introduce();
obj.introduce();

// In both the calls, there is one different and the difference is EXECUTION CONTEXT.
/*
1. The Global Execution context is created and pushed on execution stack.
2. Engine executes the code. 
3. If any function is encountered, new context is created, pushed to stack, code is executed and finally popped out. 

Execution Context is abstract in JS. Its an object that holds certain information that the function will require to execute. Few of them are
1. Variable/Activation Object: object of argument, variables passed/created.
2. Scope chain
3. this
*/