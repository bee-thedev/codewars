//Day16- Challenge#1:

//Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, 
//but they are not capitalized in the same way he originally typed them.

//Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// String.prototype.toJadenCase = function () {
//     let splitstring = this.split(" ");
//     for(i=0; i<splitstring.length; i++){
//         splitstring[i] = splitstring[i].CharAt(0).toUpperCase() + splitstring[i].substring(1);
//     }
//     return splitstring.join(' ');
//   };

//   console.log(str.toJadenCase())



  //Day17-Challenge#1:

  //You have a string that consists of zeroes and ones. Now choose any two adjacent positions in the string:
  //if one of them is 0, and the other one is 1, remove these two digits from the string.

//Return the length of the resulting (smallest) string that you can get after applying this operation multiple times?

//For "01010" the result should be 1:

//"01010"  -->  "  010"  -->  "    0"
//For "110100" the result should be 2:

//"110100"  -->  "1  100"  -->  "1    0"

function zeroAndOne(s) {
    return s.replace(/01|10/g, '').length
  }

  console.log(zeroAndOne("010101010"))


  //Day18-Challenge#1:

  //Don't give me five!
//In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

//Examples:

//1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
//4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

function dontGiveMeFive(start, end)
{
  let answer = []
 for(let i = start; i<= end; i++){
   answer.push(i + '')
}
let newanswer = answer.filter(number => number.includes('5'));
return answer.length - newanswer.length;
}

console.log(dontGiveMeFive(1,19))


//Day16: Challenge #1:

// write a function to calculate what day is today, like this:

// Use case : switch.

function howManydays(month){
  var days;
  switch (month){
    case 2: 
     days = 28
    break;
    
    case 1: 
    case 3: 
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: 
      days = 31;
    break;
    
    case 4:
    case 6:
    case 9:
    case 11:
       days = 30
  }
  return days
}

console.log(howManydays(4))




















