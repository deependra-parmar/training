const p1 = Promise.resolve(123);
const p2 = true;
const p3 = new  Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey there, I am resolved')
    }, 2000);
});

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values);
})