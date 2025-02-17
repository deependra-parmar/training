// Create a function to calculate the factorial of a number using closure

function factorial(num){
    if(typeof num != 'number'){
        console.log("Invalid Number! Number expected")
        return;
    }

    let ans = 1;
    function calculate(){
        for(let i=1; i<=num; i++)
            ans *= i;
    }

    calculate(num);

    return ans;
}

console.log("Factorial of 6 is: ", factorial(6));