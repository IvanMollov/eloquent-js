// Minimum
console.log('Minimum');

function min(a, b)
{
    return (a < b) ? a : b;
}

console.log(min(0, 10));
console.log(min(10, 0));

console.log();

// Recursion
console.log("Recursion");

function is_even(number) 
{
    number = Math.abs(number);

    if (number === 0) {
        return true;
    }
    if (number === 1) {
        return false;
    }

    return is_even(number - 2);
}

console.log(is_even(50));
console.log(is_even(5));
console.log(is_even(-50));
console.log(is_even(-5));

console.log();

// Bean counting
console.log("Bean counting");

function count_char(s, c)
{
    let count = 0;
    for (const symbol of s) {
        if (symbol === c) {
            ++count;
        }
    }

    return count;
}

function count_Bs(s)
{
    return count_char(s, "B");
}

console.log(count_Bs("BBBBCCCCCBB"));

console.log();