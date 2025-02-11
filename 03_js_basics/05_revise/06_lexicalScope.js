// Lexical scope is a scope in which the local variable of outer function is available in the scope of the inner function and is accessible with its context.

function outer(){
    let name = "Deependra Parmar";
    
    function inner(){
        console.log(name)
    };

    inner();
};

outer();