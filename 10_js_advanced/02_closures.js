// Closure is the concept that applies to functions with which allows an inner function to access the variable and use the lexical environment of the outer function or scope even after the outer function has finished executing.

// Lexical scoping is the concept where the function's scope is determined by where it is defined and not where its called.

const outer = () => {
    const username = "deependraparmar"
    const email = "dp@gmail.com"

    const inner = () => {
        const password = 'mysupersecret'

        console.log("Username: ", username);
        console.log("Email: ", email);
        console.log("Password: ", password);
    }
    inner();
}

outer();