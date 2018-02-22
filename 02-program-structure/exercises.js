// Looping a triangle
console.log('Looping a triange');

for (let row_number = 1; row_number <= 7; ++row_number) {
    let row = String().padEnd(row_number, '#');
    console.log(row);
}

console.log();

// FizzBuzz
console.log('FizzBuzz #1');

for (let number = 1; number <= 100; ++number) {
    let output;
    if (number % 3 == 0) {
        output = 'Fizz';
    } 
    else if (number % 5 == 0) {
        output = 'Buzz';
    }
    else /* if (number is not divisible by 3 or 5) */ {
        output = number;
    }

    console.log(output);
}

console.log();

console.log('FizzBuzz #2');

for (let number = 1; number <= 100; ++number) {
    let output = '';
    if (number % 3 == 0) {
        output += 'Fizz';
    } 
    if (number % 5 == 0) {
        output += 'Buzz';
    }

    // easy and a bit dumb

    // if (output == '') {
    //     output = number;
    // }

    // console.log(output);

    // NOTE: if output is '' the || returns right side expression
    console.log(output || number);
}

console.log();

// Chess board #1
console.log('Chess board #1');

let board = '';

let current_cell = ' ';
let other_cell   = '#';
for (let i = 1; i <= 64; ++i) {
    board += current_cell;
        
    // if not end of row
    if (i % 8 != 0) {
        // NOTE: swap
        [current_cell, other_cell] = [other_cell, current_cell];
    }
    else /* if end of row */ {
        board += '\n'
    }
}

console.log(board);

console.log();

// Chess board #2
console.log('Chess board #2');

function print_board(size) 
{
    let board = '';
    
    let current_cell = ' ';
    let other_cell   = '#';
    const cells_count = size * size;
    for (let i = 1; i <= cells_count; ++i) {
        board += current_cell;
        
        // if not end of row
        if (i % size != 0) {
            // NOTE: swap
            [current_cell, other_cell] = [other_cell, current_cell];
        }
        else /* if end of row */ {
            board += '\n'
        }
    }
    
    console.log(board);
}

print_board(10);

console.log();