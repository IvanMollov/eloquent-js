// special numeric values
const positive_infinity = Infinity;
const negative_infinity = -Infinity;
const nan = NaN;

// NOTE: strings in js are unicode

// NOTE: backticks placeholders - nice
console.log(`${positive_infinity} type:${typeof positive_infinity}`);
console.log(`${negative_infinity} type:${typeof negative_infinity}`);
console.log(`${nan} type:${typeof nan}`);

// special characters in string literals
// NOTE: don't use new lines in backticks
//       it's ugly in code
const string_backticks = `yoyo
iz it workin?`;
const string_regular = '1\n2';

console.log(string_backticks);
console.log(string_regular);

// NOTE: NaN != NaN
console.log(NaN === NaN);
console.log(Infinity === Infinity);
console.log(undefined === undefined);
console.log(null === null);

// NOTE: operations on NaN produce NaN
// NOTE: every type tries to match with the others
//       first:  right argument is casted to left
//       second: if this fails - left to right
console.log(8 * null);
console.log("5" - 1);
console.log("5" + 1);
console.log(1 + "5");
console.log("five" * 2);
console.log(false == 0);

// NOTE: if comparing null or undefined with something
//       result is true only if second argument is null or undefined
console.log(null == undefined);
console.log(null == 0);