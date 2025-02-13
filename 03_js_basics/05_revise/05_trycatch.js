try{
    setTimeout(() => {
        console.log("In the try");
    }, 2000)

    console.log("Deependra");
}
catch(error){
    console.log(error.message);
}