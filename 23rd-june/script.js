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
    let ab = str.match(/ending/g)
    console.log(ab)
  }


  solution('abc', 'c')


//7kyu -Wealth Equality Finally!

//   The year is 2088 and the Radical Marxist Socialist People's Party (RMSPP) has just seized power in Brazil.

// Their first act in power is absolute wealth equality through coercive redistribution.

// Create a function that redistributes all wealth equally among all citizens.

// Wealth is represented as an array/list where every index is the wealth of a single citizen. The function should mutate the input such that every index has the same amount of wealth. MUTATE the input array/list, don't return anything.

// See example:

// wealth = [5, 10, 6]  # This represents:
//                      # citizen 1 has wealth 5
//                      # citizen 2 has wealth 10
//                      # citizen 3 has wealth 6
                     
// redistribute_wealth(wealth) # mutates wealth list
// wealth => [7, 7, 7] # wealth has now been equally redistributed
// Info:

// MUTATE the input array/list, don't return anything

// Input is garantueed to hold at least 1 or more citizens

// Wealth of citizen will an integer with minimum 0 (negative wealth not possible)

// Handling of floating point error will not be tested


function redistributeWealth(wealth) {
    // Mutate wealth
  }


  redistributeWealth()



//7kyu- Disemvowel Trolls

//   Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' ..
//comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    let popoutVowelsRegex = /[aeiou]/ig;
    let popoutVowels = str.replace( popoutVowelsRegex, '' );
    return console.log(popoutVowels);
  }

  disemvowel("This website is for losers LOL!");



  //7kyu - mumbling

//   DESCRIPTION:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
  let recurring = s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  return console.log(recurring);
}

accum("beenysh");



//8kyu -- Pillars
// DESCRIPTION:
// There are pillars near the road. The distance between the pillars is the same and 
//the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and 
//the last pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
  if(numPill <= 1) return 0;
  let accumulatedWidth = numPill * width - 2*width;
  let pillardistance = (numPill-1) * (dist * 100);

  let totalDist = (accumulatedWidth + pillardistance);
  return totalDist;
}

pillars(2, 10, 10);

//7kyu-Replace every nth

// DESCRIPTION:
// Task
// Write a method, that replaces every nth char oldValue with char newValue.

// Method:

// replaceNth(text, n, oldValue, newValue)

function replaceNth(text, n, oldValue, newValue) {
  let textSplit = text.split(": ")
  console.log(textSplit)
}

replaceNth("Vader said: I am your father.");