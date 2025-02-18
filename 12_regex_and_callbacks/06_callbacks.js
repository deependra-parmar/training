// A callback function is the function which is passed as an argument into another function and which is then invoked inside the outer function to complete an action.

// A callback is like a helper function for a function that does something asynchronously in order to know that a particular task is done and perform next operations.

function loadScript(url, callback){
    let script = document.createElement('script');
    script.src = url;
    script.onload = function(){
        console.log(`Script loaded with src: ${url}`);
        callback();
    }
    document.body.appendChild(script);
}

loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js', () => {
    alert("Script Loaded");
})