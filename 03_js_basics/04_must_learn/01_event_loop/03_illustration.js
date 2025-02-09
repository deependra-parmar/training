function func1(){
    console.log("Hey there, first function");
    func2();
    
    setTimeout(() => {
        console.log("setTimeOut of 1st after 3s")
    }, 3000);
}

setTimeout(() => {
    console.log("Independent setTimeOut after 5s")
}, 5000)

function func2(){
    console.log("Hey there, second function");
    
    setTimeout(() => {
        console.log("setTimeOut of 2nd after 4s")
    }, 4000);
}

func1();