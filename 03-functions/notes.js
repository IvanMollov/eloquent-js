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

// NOTE: every var in js is just a reference
//       this means that when you assign a something to var 
//       this just changes where the var points to
(function (a) 
{
    a.b = 13;
    
    a = {
        a: 3,
        b: 13
    };
})(a);

// NOTE: #3 if the let is changed the const is changed also
b.a = 13;

console.log(a);
console.log(b);
console.log(c);
