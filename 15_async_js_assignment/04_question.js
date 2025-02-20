// Let's assume that we have a for loop that prints 0 to 10 at random intervals (0 to 6 seconds). We need to modify it using promises to print sequentially 0 to 10. For example, if 0 takes 6 seconds to print and 1 takes two seconds to print, then 1 should wait for 0 to print, and so on.

/*
console.log('This code prints number randomly: ');

for(let i=0; i<=10; i++){
    const interval = Math.floor(Math.random()*6);

    setTimeout(() => {
        console.log(`Interval: ${interval} | Value of i: ${i}`);
    }, interval * 1000);
}

console.log("\n\n");

*/


for(let i=0; i<=10; i++){
    const interval = Math.floor(Math.random()*6);

    async function printValue(interval){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({i, interval});
            }, interval * 1000);
        }).then(({i, interval}) => {
            console.log(`Interval: ${interval} | Value: ${i}`);
        }).catch((error) => {
            console.log("Error in operation: ", error);
        });
    }

    await printValue(interval);
}