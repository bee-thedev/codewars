//Convert a Number to a String!

// Grasshopper - Summation

// Summation
// Write a program that finds the summation of every number from 1 to num. 
//The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


var summation = function (num) {
    let theSum = 0
    for ( let i=0; i<=num; i++){
       theSum += i
        
    }
    return theSum;
  }


  summation(6)


  //

//   Your friend invites you out to a cool floating pontoon around 1km off the beach.
 //Among other things, the pontoon has a huge slide that drops you out right into the ocean,..
 // a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering..
// in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. 
//To make it easier... as you do the mental calculations in the water you either freeze..
// when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. 
//he shark will eat you if it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the ..
//dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".


function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin == true){
        sharkSpeed = sharkSpeed /2
    }

    let youTime = pontoonDistance / youSpeed;
    let sharkTime = sharkDistance / sharkSpeed;

    return console.log(youTime < sharkTime ? "Alive!" : "Shark Bait!");
}

// shark(12, 50, 4, 8, false)

// 8kyu-Challenge : Training JS #29: methods of arrayObject---concat() and join()
// Task
// Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

// Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

// And then sort array in descending order.

// Finally, use the separator ">" to connect the elements into a string.

// Don't complain about the situation like 1>1 is not reasonable, it is just a separator.

// Some example:

// bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
// bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
// bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"

// function bigToSmall(arr){
//     let conjoined = [];
//     for( let i = 0; i<arr.length; i++){
//         for(let j = 0; j<arr[i].length; j++){
//             conjoined.push(arr[i][j])
//         }
//     }
//     var result = conjoined.sort((a,b)=> b-a).join(">")
//     return result;
//   }

// function bigToSmall(arr) {
//     return console.log([].concat(...arr).sort((a, b) => b - a).join('>'));
//   } 

  function bigToSmall(arr){
      let conjoined = [];
      let mergeArrays = conjoined.concat(...arr);
      console.log(mergeArrays);

      let reArrange = mergeArrays.sort((a,b)=> b-a).join(">")


      return console.log(reArrange)
  }


bigToSmall([[1,2,3], [5,6], [9, 0]])

// Training JS #31: methods of arrayObject---isArray() indexOf() and toString()


// Task
// Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

// If arr is not an array, function should return:

// "It's a fake array"
// If arr contains elements 5 and 13, function should return:

// "It's a black array"
// If arr contains neither 5 nor 13, function should return:

// "It's a white array"
// Examples
// blackAndWhite(5,13) should return "It's a fake array"
// blackAndWhite([5,13]) should return "It's a black array"
// blackAndWhite([5,12]) should return "It's a white array" 


function blackAndWhite(arr){
    let trueArray = Array.isArray(arr);
    if(!trueArray) return console.log("It's a fake array")

   if(trueArray){
          if(arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1){
              return console.log("It's a black array")
          }else{
              return console.log("It's a white array")
          }
       }
   }


  blackAndWhite([1,2,13])

//   Training JS #32: methods of Math---round() ceil() and floor()
//   Task
//   Coding in function roundIt. function accept 1 parameter n. 
//It's a number with a decimal point. 
//Please use different methods based on the location of the decimal point, 
//turn the number into an integer.
  
//   If the decimal point is on the left side of the number..
// (that is, the count of digits on the left of the decimal point is less than that on the right),..
// Using ceil() method.
  
//   roundIt(3.45) should return 4
//   If the decimal point is on the right side of the number ..
//(that is, the count of digits on the left of the decimal point is more than that on the right), ..
//Using floor() method.
  
//   roundIt(34.5) should return 34
//   If the decimal point is on the middle of the number ..
//(that is, the count of digits on the left of the decimal point is equals that on the right), ..
//Using round() method.
  
//   roundIt(34.56) should return 35

function roundIt(n){
    let rightBiased = n.toString().split(".")
    console.log(rightBiased)
    if(rightBiased[1].length > rightBiased[0].length){
        return console.log(Math.ceil(n))
    }else if(rightBiased[1].length<rightBiased[0].length){
        return console.log(Math.floor(n))
    }else if(rightBiased[1].length === rightBiased[0].length){
        return console.log(Math.round(n))
    }
  }

  roundIt(34.5);

//   Training JS #33: methods of Math---max() min() and abs()

//   Task
// Coding in function maxMin. function accept 2 parameter arr1 and arr2. 
//They are two number array and have the same number of elements.

// First, calculate the difference of the same index of the arr1 and arr2. Like this:

// [1,3,5]
//  | | |   --->  8, 5, 2
// [9,8,7]
// Please note that the difference is positive. Such as the above 1 and 9, ..
//the difference should be 8, not -8. I think abs() can help you get the correct result ;-)

// Then find the maximum and minimum values of them, ...
//and return the results in the form of an array. Like this:

//   maxvalue , minvalue
// [    8     ,    2     ]
// Examples
// maxMin([1,3,5],[9,8,7])               should return [8,2]
// maxMin([1,10,100,1000],[0,0,0,0])     should return [1000,1]
// maxMin([10,20,30,40],[111,11,1,-111]) should return [151,9]

function maxMin(arr1,arr2){
        var result = [];
        for (var i = 0; i < arr1.length; i++) {
          if (arr2.indexOf(arr1[i]) === -1) {
            result.push(Math.abs(arr1[i]-arr2[i]));
          }
        }
           let maximum = Math.max(...result);
           let minimum = Math.min(...result);

           result = ([maximum, minimum])
           return console.log(result);
          }
    

  maxMin([1,3,5],[9,8,7])