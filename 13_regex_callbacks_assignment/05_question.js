// Implement setTimeout function using native Javascript

function customSetTimeOutFunction(callback, delay){
    const start = Date.now();

    const interval = setInterval(() => {
        const elapsed = Date.now() - start;

        if(elapsed >= delay){
            clearInterval(interval);
            callback();
        }
    })
}

customSetTimeOutFunction(() => {
    console.log("Custom SetTimeout(): logs after 3 seconds");
}, 3000);