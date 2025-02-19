// Object Destructuring provides a better and cleaner way to pick out properties from an object in order to avoid conflict with the names of the properties.

const object = {
    name: "hello world", 
    username: "hello_world05",
    password: "password@1234",
    printMe: () => {
        console.log(`My name is ${name} and my username is ${username}`);
    }
}

const {name, username, printMe} = object;

// You can also assign different names to destructured values
// { orginal_name: assigned_name }
const {name: Name, username: Username, printMe: PrintMe} = object;

console.log(name, username);
printMe();

console.log();

console.log(Name, Username);
PrintMe();