// Getter methods: used to get the value of a property in JS
// Setter methods: used to set the value of a property in JS

const student = {
    firstName: "Deependra",
    lastName: "Parmar",

    get getName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set setFirstName(fName){
        this.firstName = fName;
    },
    set setLastName(lName){
        this.lastName = lName;
    }
}

console.log(student);
student.setFirstName = "Hello"
student.setLastName = "World"
console.log(student.getName);
console.log(student);
