import sayHello from "./module.js";

await sayHello(); // If any function is async, so you can call it with await in another file/module. We need not to call it in another async scope.