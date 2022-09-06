//7kyu -- Breaking chocolate problem

// Your task is to split the chocolate bar of given dimension n x m into small squares. 
// Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break,
//  but for size 3 x 1 you must do two breaks.

// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). 
// Input will always be a non-negative integer.


function breakChocolate(n,m) {
    return 0;
  }

  breakChocolate()


//6kyu-

//A pangram is a sentence that contains every single letter of the alphabet at least once. 
//For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
 // because it uses the letters A-Z at least once (case is irrelevant).

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


//7kyu- Testing 1 2 3

//Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: "c"]



/*========================================================= 7kyu- Friend or Foe ==================================================*/

//7 kyu -- Friend or Foe?
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] 
//i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.


function friend(friends){
  let friendsArray = []
  for(let i=0; i< friends.length; i++){
      if(friends[i].length === 4){
        friendsArray.push(friends[i])
      }
  }
  return console.log(friendsArray)
}

friend(["Ryan", "Kieran", "Mark", "Omar", "Beenysh", "Zoha"]);


//8kyu - Sum without highest and lowest number

// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, 
// or the given array is an empty list or a list with only 1 element, return 0.


function sumArray(array) {
  let sum = 0;
if(array == null){
  return 0;
}else if(array.length < 2){
  return 0
}else{
   array = array.sort((a,b)=> a -b)
  for(let i= 1; i< array.length-1; i++){
    sum = sum + array[i]
  }
  return sum
}
 }
sumArray([1,1,11,2,3]);