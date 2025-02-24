import sayHello from "./module.js";

try{
    const data = await sayHello(); // If any function is async, so you can call it with await in another file/module. We need not to call it in another async scope.

    console.log(data);
}
catch(error){
    console.error("Error: ", error.message);
}