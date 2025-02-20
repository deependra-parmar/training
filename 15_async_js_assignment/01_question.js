// Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or higher than the value 10.

function testNum(num){
    return new Promise((resolve, reject) => {
        if(num > 10)
            resolve("Number is greater than 10");
        else
            resolve("Number is less than 10");
    })
}

testNum(1).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});