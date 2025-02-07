// Conditional 

let num = 11

if(num % 2 == 0)
    console.log("Even Number");
else
    console.log("Odd Number");

// Switch
expr = "Delhi"

switch (expr) {
    case 'Delhi':
        console.log("I am Delhi");
        break;

    case 'Mumbai':
        console.log("I am Mumbai");
        break;

    default:
        console.log("I am nothing");
        break;
}

// ternary 

let a = 10
console.log(a%10 == 0 ? "Divisible by 10" : "Not Divisible by 10");