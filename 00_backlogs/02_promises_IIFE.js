// 2. Promise handling in IIFE

(function (){
    return new Promise((resolve, reject) => {
        // async tasks here
        setTimeout(() => {
            const success = true;

            if(success)
                resolve("Task done...");
            else
                reject("Task failed...");
        }, 3000);
    }).then((response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
})();