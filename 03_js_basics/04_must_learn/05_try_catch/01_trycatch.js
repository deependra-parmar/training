// The try...catch block is a fundamental construct in JavaScript for handling runtime errors. It provides a structured approach to isolate and manage errors, preventing your application from crashing and providing a more robust user experience.

// When to use try-catch: during async operations(fetch, setTimeout), user input-validation, external library interactions. 

try{
    const response = fetch('https://dummyjson.com/test')
    .then(res => res.json())
    .then(console.log);

    console.log("Response is: ", response);
}
catch(error){
    console.log("Error fetching data: ", error);
}