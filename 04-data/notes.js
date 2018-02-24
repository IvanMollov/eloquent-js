// NOTE: null and undefined have no properties

// NOTE: property'x' of object 'a' is accessed by 'a.x' or "a['x']"
//       a.x -> 'x' is the property's name
//       a['x'] -> in brackets is put an expression, its result is the property's name

// NOTE: reading a property that doesn't exist results in undefined

// NOTE: delete removes a property from object
// NOTE: operator 'in' return whether a property exists in object
let a = {
    a: 1,
    b: 2
};

console.log(a.a); // → 1
console.log(a.b); // → 2

// unset properties
delete a.a;
a.b = undefined

console.log(a.a); // → undefined
console.log(a.b); // → undefined

console.log("left" in a); // → false
console.log("right" in a); // → true

// NOTE: array with the properties names
console.log(Object.keys(a));

console.log(typeof a); // object

// NOTE: Object..assign copies own properties of second obj to first
Object.assign(a, { c: 3, d: 4 });
console.log(Object.keys(a));

// NOTE: every let in JS is reference
let o1 = {a: 10};
let o2 = o1;
let o3 = {a: 10};

console.log(o1 === o2); // → true
console.log(o1 === o3); // → false

o1.a = 15;
console.log(o2.a); // → 15
console.log(o3.a); // → 10

// NOTE: length property
//       arrays have push and pop (stacks)
//       shift and unshift are for pushing and popping front
//       indexOf gives the first occurance
//       lastIndexOf gives the last
//       both take second argument which is the beginning of the search
//       slice takes two indexes returns subarray from first to last
//           (without including the last element)
//       concat two strings

// NOTE: length property
//       strings, numbers and booleans are not objects,
//       can not set new properties, only build-in
//       slice
//       indexOf accepts string (multi character also)
//       trim whitespace from beginning and end
//       padStart
//       split a string into array of strings on every occurance of argument
//       join array of strings into a string with argument between them
//       repeat a string multiple times

// shorthand
let b = 3, c = 4;
let d = { b, c };
console.log(d);

// NOTE: Array.prototype.includes check if a value is in array
console.log([].includes('jj'));

let c = [1, 3, 4, 5];
let e = {'tt'};

// NOTE: arrays are iterable
//       strings are iterable
//       objects are not 
for (const iterator of c) {
    console.log(iterator);
}

// a holds every parameter the function is called with
function f(...a) {

}

function g(a, b) {

}

// ... expands an array into vars
let y = [3, 5];
g(...y);
let z = [1 , ...y];

// NOTE: let and const warns when overriding something, var and global not
let a = 5; // creates warning

// NOTE: Math object has random, floor, min, max, cos, sin, etc.
// Math.random() produces an float between 0 and 1

// NOTE: this takes array 'arr' and a = arr[0], b = arr[1], c = arr[2] 
function h([a, b, c]) {
    
}

// variable i is set to object's i property
let {i} = {i: 5, j: 6};

// NOTE: JSON is like plain-old-struct, names of properties must be quoted
//       can have arrays and objects
//       JSON.stringify() and JSON.parse()