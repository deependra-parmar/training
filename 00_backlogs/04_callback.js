const normal = () => {
    console.log("Hey there, I am normal");
}

const hof = (num, callback) => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "deependraparmar",
                age: 20, 
                num
            });
        }, 2000);
    }).then((data) => {
        callback(data);
    }).catch((error) => {
        console.log("Error occured: ", error);
    })

}

hof(10, (data) => {
    console.log("Data send to microservice: ", data);
});
