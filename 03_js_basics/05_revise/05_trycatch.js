try{
    // throw new TypeError("This is the TypeError");
    setTimeout(() => {
        console.log("Inside try");
    }, 5000);
}
catch({name, message}){
    console.log(name);
    console.log(message);
}
finally{
    console.log("Finally")
}