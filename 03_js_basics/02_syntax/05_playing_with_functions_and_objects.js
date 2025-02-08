// created a function like this

function myIceCream(){
    const flavour = 'chocolate';

    console.log(`My favorite ice-cream is: ${flavour}`);
}

// assigning a function with property
myIceCream.flavours = ['vanilla','pista','butterscotch']
console.log(myIceCream);

// assigning a function with a function
myIceCream.showFlavours = function(){
    return this.flavours;
}
console.log(myIceCream.showFlavours());

// storing functions in variables, arrays, functions and objects
let showMyIceCreamVar = myIceCream;
let showMyIceCreamArr = [0, true, "Hello!", myIceCream];
let showMyIceCreamFunc = function(){
    return myIceCream;
}
let showMyIceCreamObj = {
    name: "Ice-Cream",
    age: "10 days",
    property: myIceCream
}
console.log("------------------------");
console.log("Function via variable: ",showMyIceCreamVar);
console.log("Function via array: ",showMyIceCreamArr[3]);
console.log("Function via function: ",showMyIceCreamFunc());
console.log("Function via object: ",showMyIceCreamObj.property);