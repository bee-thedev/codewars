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

function replaceNth(text, n, oldValue, newValue) {

  if (n <= 0)
    return text;
  
  let count = 0;
  
  const regex = new RegExp(oldValue, 'g');
  const iter = _ => ++count % n === 0 ? newValue : oldValue
  
  return text.replace(regex, iter);
  
}

//7kyu - Simple Fun #195: Guess Hat Color

// Task
// Four men, a, b, c and d are standing in a line, one behind another.

// There's a wall between the first three people (a, b and c) and the last one (d).

// The men a, b and c are lined up in order of height, so that:

// person a can see the backs of b and c
// person b can see the back of c
// person c can see just the wall
// There are 4 hats, 2 black and 2 white. Each person is given a hat. 
//None of them can see their own hat, but person a can see the hats of b and c, while ...
//person b can see the hat of person c. Neither c nor d can see any hats.

// Once a person figures out the color of their hat, they shout it.

// Four men, in decreasing height, standing behind each other,..
// wearing black and white colored hats, with the last man on the right hidden behind the wall.

// Your task is to return the person who will guess their hat first. 
//You can assume that they will speak only when they reach a correct conclusion.

// Input/Output
// [input] string a
// a's hat color ("white" or "black").

// [input] string b
// b's hat color ("white" or "black").

// [input] string c
// c's hat color ("white" or "black").

// [input] string d
// d's hat color ("white" or "black").

// [output] an integer
// The person to guess his hat's color first, 1 for a, 2 for b, 3 for c and 4 for d.



function guessHatColor(a,b,c,d) {

    if (c == b && b == 'white'){
      return 1;
    };
    if (c == b && b == 'black'){
      return 1;
    };
    if (b == d && b == 'black'){
      return 2;
    };
    if (b == d && b == 'white'){
      return 2;
    };
    if (a == b && b == 'white'){
      return 2;
    };
    if (a == b && b == 'black'){
      return 2;
    };
  
  return 0
}

guessHatColor()

//7kyu- Square Every Digit

// DESCRIPTION:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
   let splitNumber = num.toString().split("")
   console.log(splitNumber)
    let squared = parseInt(splitNumber.map(digit => digit*digit).join(""));
   return console.log(squared);
}

squareDigits(9119);

//7kyu-Isogram

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram. 
//Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


function isIsogram(str){
  let splitString = str.toLowerCase();
  console.log(splitString)
  for(let i =0; i< splitString.length -1; i++){
    for( let j =i+1; j < splitString.length; j++){
  if(splitString[i] === splitString[j]){
    return console.log(false);
  }
}
}
  return console.log(true);
}

isIsogram("benyshsaeed");


