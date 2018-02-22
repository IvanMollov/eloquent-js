// NOTE: #1 const means const is immutable
const a = {
    a: 3,
    b: 23
};

// NOTE: #2 can assign to let var
let b = a;
let c = b;

console.log(a);
console.log(b);
console.log(c);

// NOTE: functions can be called before they are defined
f(a);

// NOTE: fc is not a function
//       it is a reference to a function and must be defined before it is used
// fc(a); // illegal

// NOTE: #3 if the let is changed the const is changed also
b.a = 13;

console.log(a);
console.log(b);
console.log(c);

// NOTE: default arguments
// NOTE: if a function is called with less arguments then defined
//       they are assigned undefined
// NOTE: if more - they are ignored
// NOTE: every var in js is just a reference
//       this means that when you assign a something to var 
//       this just changes where the var points to
// NOTE: functions create a closure
//       vars there are created every time the function is called
// NOTE: best is when a function does only a single thing
function f(a, arg1 = 2, c) 
{
    // NOTE: a is local (not the var from upper scope) now

    // NOTE: functions see vars from upper scopes
    console.log(b);

    a.b = 13;
    
    a = {
        a: 3,
        b: 13
    };
}

let fc = f;

let d = {
    a: 1,
    b: 2
};

// NOTE: reference
function g(a)
{
    return a;
}

let e = g(d);

console.log(d);
console.log(e);

d.a = 5;

console.log(d);
console.log(e);