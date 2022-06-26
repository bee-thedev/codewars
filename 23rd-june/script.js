//7kyu- Binary Addition

// Implement a function that adds two numbers together and returns their sum in binary. 
//The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)


function addBinary(a,b) {
    let sum = a + b;
    console.log(sum)
    let intoBinary = sum.toString(2)
    console.log(typeof intoBinary)
    console.log(intoBinary)
    // return console.log(`${a} + ${b} = ${sum} in decimal or ${intoBinary} in binary`)

    return intoBinary;
    
}

addBinary(5,9)

//7kyu - Growth Of Population


// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10


function nbYear(p0, percent, aug, p) {
    let years;
    for( years=0; p0 <p; years++){
        p0 = Math.floor(p0 + p0 * percent/100 + aug);
    }
    return years;
}

nbYear(1500000, 2.5, 10000, 2000000)



//7kyu-String ends with?

// Complete the solution so that it returns true if the first argument(string)...
// passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


function solution(str, ending){
    // TODO: complete
  }


  solution('abc', 'de')