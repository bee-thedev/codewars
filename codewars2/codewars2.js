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