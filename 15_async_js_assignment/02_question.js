// Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the Array contains anything but Strings, it should throw an error.

const arr = ['hello', 'there', 'I', 'am', 'good'];

const makeAllCaps = (arr) => {
    if(arr instanceof Array == false){
        reject(`String Array Expected! in function matchAllCaps()`);
    }

    return new Promise((resolve, reject) => {
        const result = arr.map((item, index) => {
            if(typeof item != 'string')
                reject(`String Array Expected. Found ${typeof item} at index ${index}`)

            return String(item).charAt(0).toUpperCase() + String(item).slice(1);
        });

        resolve(result);
    })
}

const sortWords = (arr) => {
    return new Promise((resolve, reject) => {
        if(arr instanceof Array == false){
            reject(`String Array Expected! in function sortWords()`);
        }

        resolve(arr.sort());
    })
}

makeAllCaps(arr).then((allCaps) => {
    console.log(`Capitalized String array is: `, allCaps);
    return allCaps;
}).then((allCaps) => {
    return sortWords(allCaps);
}).then((finalArray) => {
    console.log(`Final array is: `, finalArray);
}).catch((error) => {
    console.error("Error performing operation: ", error);
});