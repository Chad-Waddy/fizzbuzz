// below is the fizz buzz function
//---- thought process
//- so as long as you look at it literly its easy
// if anything reduced by 3 = 0 then its fizz 
// if anything reduced =by 5 =0 then its buzz



function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let output = '';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        console.log(output || i);