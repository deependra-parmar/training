// for of: used to iterate the iterables like array, string, maps, etc

let arr = [0, 1, true, "Hello", 2.3343]
let str = "Hello everyone"
let obj = {
    name: "Deependra Parmar",
    age: 20,
}

// for in used to iterate over iterables

for (let i of arr)
    console.log(i);

for(let i of str)
    console.log(i);

// for in: used to iterate over properties of an object
for(let i in obj)
    console.log(obj[i]);

for(let i in str)
    console.log(str[i]);