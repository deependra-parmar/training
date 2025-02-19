/* Arrow functions is the new way of concisely defining the function in JS. 

    - They have shorter syntax than function expressions.
    - They have implicit return statements.
    - They do not have their 'this'. They retain the context of the method or block they are defined in.
    - They cannot be used as a constructor.
*/

const object = {
    name: "Deependra Parmar",
    username: "deependraparmar",
    email: "dp@gmail.com", 

    printMe: function(){
        console.log("this for printMe: ", this, '\n');
        return () => {
            console.log(`Hey there!, My name is ${this.name}`);
        }
    }
}

object.printMe()();