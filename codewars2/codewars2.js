//Day11 -Challenge#1 : String Cleaning
// Clean the string off all the numbers that is thrown in by mistake or whatever
// However Keep the special characters and spacing in tact

//'! !'                 -> '! !'
//'123456789'           -> ''
//'This looks5 grea8t!' -> 'This looks great!'

function stringClean(s){
    let cleaning = s.replace(/[0-9]/g,"")
    return cleaning;
  }

  console.log(stringClean("My name5 is beenysh0"))

  //Day11-Challenge#2: Complete the solution so that it reverses the string passed into it.
  //'world'  =>  'dlrow'
//'word'   =>  'drow'

function solution(str){
  let reversed = str.split("").reverse().join("")
  return reversed
}

console.log(solution("Beenysh"))

// Day11- Challenge#3: Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
    let doubletheint = 2*i;
    return doubletheint;
  }

  console.log(doubleInteger(8))


  //Day11-Challenge#4: Implement a function which convert the given boolean value into its string representation.

//Note: Only valid inputs will be given.

function booleanToString(b){
    let intoString = b.toString()
    
    console.log(typeof intoString)
    return intoString
  }

  console.log(booleanToString(true))


  //Day11-Challenge#5 : Create a function with two arguments that will 
  //return an array of the first (n) multiples of (x).

//Assume both the given number and the number of times to count will be positive numbers greater than 0.

//countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
  let z = [];
  
  for (let i = 1; i <= n ; i++){
    let multiple = (x*i)
    z.push(multiple)
  }
  return z;
}

console.log(countBy(11,10))

//Day11 -Challenge#6: Task:
//Your task is to write a function which returns the sum of following series upto nth term(parameter).

//Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

//Rules:
//You need to round the answer to 2 decimal places and return it as String.

//If the given value is 0 then it should return 0.00

//You will only be given Natural Numbers as arguments.

//Examples:(Input --> Output)
//1 --> 1 --> "1.00"
//2 --> 1 + 1/4 --> "1.25"
//5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n)
{
  let sum = 0;
  for(let i = 0; i < n; i++){
    sum = sum + (1/(1+i*3))
  }
  return sum.toFixed(2).toString();
}

console.log(SeriesSum(5))



//Day12-Challenge#1:You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  arr.map(number =>{
    if(number >=0){
      sum = sum + number
    }else{
      sum = sum
    }
  })
  return sum;
}


//Day12-Challenege#2: 
//If you can't sleep, just count sheep!!
//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  let sheepcount = "";
  for( let i = 1; i<=num; i++){
      sheepcount = sheepcount + `${i} sheep...` ;
  }
  return sheepcount
}

console.log(countSheep(6))

//Day12-Challenge#3: REturn grades basing on avg of three scores attain by a student

function getGrade (s1, s2, s3) {
  let grade = " "
  let score = (s1 + s2 + s3)/3;
  
  if(score>= 90 && score <=100){
    grade = 'A'
  }else if(score<90 && score>=80){
    grade = "B"
  }else if(score<80 && score >=70){
    grade = "C"
  }else if( score<70 && score >=60){
    grade = "D"
  }else{
    grade = "F"
  }
  return grade;
}

console.log(getGrade(67,89,100))


//Day13-- Challenge#1: Is this a triangle?
//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

//(In this case, all triangles must have surface greater than 0 to be accepted).


function isTriangle(a,b,c)
{
  if(a+b>c && b+c>a && c+a>b){
    return true;
  }else{
    return false
  }
}

console.log(isTriangle(3,6,9))


//Day13-Challenge#2:
//You are given an odd-length array of integers, in which all of them are the same, except for one single number.

//Complete the method which accepts such an array, and returns that single different number.

//The input array will always be valid! (odd-length >= 3)

//Examples
//[1, 1, 2] ==> 2
//[17, 17, 3, 17, 17, 17, 17] ==> 3


function stray(numbers) {
  let sorting = numbers.sort((function(a, b){return a - b}));
  console.log(sorting)
  if(numbers[0] < numbers[1]){
    return sorting.shift()
  }else{
  return sorting.pop()
}
}

console.log(stray([50,-1,50,50,50,50]))


//Day13-Challenge#3: 

//Given a list of integers, determine whether the sum of its elements is odd or even.

//Give your answer as a string matching "odd" or "even".

//If the input array is empty consider it as: [0] (array with a zero).

//Examples:
//Input: [0]
//Output: "even"

//Input: [0, 1, 4]
//Output: "odd"

//Input: [0, -1, -5]
//Output: "even"


function oddOrEven(array) {
  let accumulatedSum = 0;
   array.forEach(number=> {
       return  accumulatedSum += number
      })
      if(accumulatedSum % 2 === 0){
        return "even"
      }else if(accumulatedSum %2 !== 0){
        return "odd"
      }
}

console.log(oddOrEven([3,3,8,0,4,5,-7]))


//Day14-Challenge#1: Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//   let vowelsCount = 0;
  
//   str.split("").filter(letter => letter=== "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" ? vowelsCount++ : " ")

//   console.log(vowelsCount)
//   return vowelsCount;
// }

function getCount(str) {
  let vowelsCount = 0;
  let strlower = str.toLowerCase()
  strlower.split("").filter(letter => letter=== "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" ? vowelsCount++ : " ")

  console.log(vowelsCount)
  return vowelsCount;
}

getCount("MEESHAAL")

//Day15-Challenge#1: 

//We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

//So given a string "super", we should return a list of [2, 4].

// Some examples:
//Mmmm  => []
//Super => [2,4]
//Apple => [1,5]
//YoMama -> [1,2,4,6]

//Vowels in this context refers to: a e i o u y (including upper case)
//This is indexed from [1..n] (not zero indexed!)


function vowelIndices(word){
  let lowercase = word.toLowerCase()
  let arr = [...lowercase]
  let newarr = []
  arr.forEach((vowel,index)=>{
    if(vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u' || vowel === 'y'){
      newarr.push(index + 1);
    }
  });
  return newarr
}


console.log(vowelIndices("beenysh"))

//Day 16 - Challenge#1: 
//For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. 
//Duplicate numbers within the array are possible.

//Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). 
//Write a function where you will win the game if your numbers can spell "BINGO". 
//They do not need to be in the right order in the input array). 
//Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

// function bingo() {
//  let letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
// "S","T", "U", "V", "W", "X", "Y", "Z"];
// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]

// let arrayy = numbers.forEach((number, i) => {
//  number[i] === letter[i] 
//  return letter[i] 
// }



function bingo(a) { 
  let letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
  "S","T", "U", "V", "W", "X", "Y", "Z"];
  let map = a.map(item => letter[item])
  return map.includes('B') && map.includes('I') && map.includes('N') && map.includes('G') && map.includes('O') ? 'WIN' : 'LOSE' 
  }


  console.log(bingo([1,8,13,6,14]))

  //Day16-Challenge#1: 

  //Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

//For example:

//solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
//solution(null); // should return []


function solution(nums){
  if(nums == null || nums.length === 0){
    return nums = []
  }else{
    return nums
  }
}
// let copyarray = [...nums].sort((a,b)=> a-b)
console.log(solution([7,-9,90,14]))




