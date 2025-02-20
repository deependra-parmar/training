const arr = [1, 2, 3, 4, 5, 6]

const asyncDouble = async function(num){
    const result = await new Promise((resolve, reject) => {
        resolve(num*2);
    });

    return result;
}

const result = arr.map(asyncDouble);
console.log(result);

Promise.all(result).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});