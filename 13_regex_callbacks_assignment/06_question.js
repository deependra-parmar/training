/**
 Implement a javascript Array having the following prototype functions without using Native javascript array:

- push

- pop

- shift

- unshift

- length

- splice

- indexOf

- forEach
 */


function CustomArray() {
    this.items = [];
}

CustomArray.prototype.push = function(value) {
    this.items[this.items.length] = value;
    return this.items.length;
};


CustomArray.prototype.pop = function() {
    if (this.items.length === 0) return undefined;
    const poppedValue = this.items[this.items.length - 1];
    this.items.length -= 1;
    return poppedValue;
};


CustomArray.prototype.shift = function() {
    if (this.items.length === 0) return undefined;
    const shiftedValue = this.items[0];
    for (let i = 0; i < this.items.length - 1; i++) {
        this.items[i] = this.items[i + 1];
    }
    this.items.length -= 1;
    return shiftedValue;
};


CustomArray.prototype.unshift = function(value) {
    for (let i = this.items.length; i > 0; i--) {
        this.items[i] = this.items[i - 1];
    }
    this.items[0] = value;
    return this.items.length; 
};


Object.defineProperty(CustomArray.prototype, 'length', {
    get: function() {
        return this.items.length;
    },
    set: function(value) {
        needed
        this.items.length = value;
    }
});


CustomArray.prototype.splice = function(startIndex, deleteCount, ...itemsToAdd) {
    let removedItems = [];
    let i;

    
    for (i = startIndex; i < startIndex + deleteCount && i < this.items.length; i++) {
        removedItems.push(this.items[i]);
    }

    
    for (i = this.items.length - 1; i >= startIndex + deleteCount; i--) {
        this.items[i + itemsToAdd.length] = this.items[i];
    }

    
    for (i = 0; i < itemsToAdd.length; i++) {
        this.items[startIndex + i] = itemsToAdd[i];
    }

    this.items.length = this.items.length - deleteCount + itemsToAdd.length;
    return removedItems;
};


CustomArray.prototype.indexOf = function(value) {
    for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] === value) {
            return i;
        }
    }
    return -1;
};


CustomArray.prototype.forEach = function(callback) {
    for (let i = 0; i < this.items.length; i++) {
        callback(this.items[i], i, this.items);
    }
};


const arr = new CustomArray();
arr.push(10);
arr.push(20);
arr.push(30);

console.log(arr.items);  // [10, 20, 30]
arr.pop();
console.log(arr.items);  // [10, 20]
arr.unshift(5);
console.log(arr.items);  // [5, 10, 20]
arr.shift();
console.log(arr.items);  // [10, 20]
arr.splice(0, 1, 50, 60);
console.log(arr.items);  // [50, 60, 20]
console.log(arr.indexOf(60));  // 1
arr.forEach((value, index) => console.log(`Index ${index}: ${value}`));
