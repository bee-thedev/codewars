// Challenge #1:
//Make a simple function called greet that returns the most-famous "hello world!".

const helloworld = () => {
    let hello = "hello world!";
    document.getElementById('helloworld').innerHTML = hello;
}

helloworld();

// Challenge #2: Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).



let arrayOfSheeps = [true,  true,  true,  false,
                    true,  true,  true,  true ,
                    true,  false, true,  false,
                    true,  false, false, true ,
                    true,  true,  true,  true ,
                    false, false, true,  true]

// let counter = arrayOfSheeps.filter(sheep => sheep === true).length;

let counter=arrayOfSheeps.map(sheep => 
 (
    sheep === true ? 1 : 0
 )).reduce((a,b) => a+b);

document.getElementById('sheeps').innerHTML = `The Number of Sheeps: ${counter}`;

// Challenge #3:In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

const negativeAnyways = (number) =>{
    if(number > 0){
        return -number;
    }else{
        return number;
    }
}

document.getElementById('negative').innerHTML = `The Negative Number: ${negativeAnyways(9)}`;

// challenge #4: Map an array elements and return double each item

const maps = (array) => {
    return array.map(element => element * 2);
}

// maps([3,6,9,0, 56,7]

document.getElementById('double').innerHTML = `The Double Array: ${maps([3,6,9,0, 56,7])}`;

// Challenge #5:
//The first century spans from the year 1 up to and including the year 100, the second century - 
//from the year 101 up to and including the year 200, etc.

function century(year) {
  let century = 0;

  for(let i=0; i <=100; i++){
    if(year % 100 === 0){
      century = year / 100;
    }else{
      century = Math.floor(year / 100) + 1;
    }
  }
  return century;
}

// const century = (year) => {
//     return Math.ceil(year / 100);
// }

document.getElementById('century').innerHTML = `The Century: ${century(701)}`;

// Challenge #6:
//Let's play! You have to return which player won! In case of a draw return Draw!.


const rps = (p1,p2) => {
    if(p1 === p2){
        return "Draw!";
    }else if(p1 === "rock" && p2 === "scissors"){
        return "Player 1 won!";
    }else if(p1 === "paper" && p2 === "rock"){
        return "Player 1 won!";
    }else if(p1 === "scissors" && p2 === "paper"){
        return "Player 1 won!";
    }else{
        return "Player 2 won!";
    }
}
console.log(rps("rock", "rock"));

// function rps(p1, p2) {
//     var choices = ['rock', 'paper', 'scissors'];
//     var x = choices.indexOf(p1);
//     var y = choices.indexOf(p2);
//     console.log(x, y);
//     if (x === y) return 'Draw!';
//     if (x === 0 && y === 2) return 'Player 1 won!';
//     if (x === 2 && y === 0) return 'Player 2 won!';
//     if (x > y) return 'Player 1 won!'
//     else return 'Player 2 won!';
//   }

  console.log(rps("rock", "rock"));

  //Challenge #7: Very simple, given an integer or a floating-point number, find its opposite.

  const opposite = (number) => {
      if(number > 0){
          return -number;
      }else if(number < 0){
          return -number;
      }
  }

  console.log(opposite(-50));

  //Challenge #8:Given a set of numbers, return the additive inverse of each. 
  //Each positive becomes negatives, and the negatives become positives.

  function invert(array) {
    document.getElementById('inverse').innerHTML = `Original Array : ${array}`;
    return array.map(item => item >= 0 ? item* -1 : item* -1);
 }
 

 document.getElementById('inverse1').innerHTML = invert([-1, 4, -5, 27, -27, 89, 76, 2,4, -6]);

    //Challenge #9: Finding Sum of array items/numbers

    // Sum Numbers
function sum (numbersArray) {
    let sum = 0;
    console.log(numbersArray);
  numbersArray.map(item=> sum += item);
  return sum;
  }
  
document.getElementById('findsum').innerHTML = (sum([1,2,3,74,-55]));


//challenge #10: Repeat a string 


// function repeatAString(string, times) {
//     let repeatedString = "";
//     for(let i = 0; i < times; i++){
//         repeatedString += string;
//     }
//     return repeatedString;
// }

//console.log(repeatAString("hello",3));

function repeatAString(times, string) {
    return string.repeat(times);
}


console.log(repeatAString(5, "Beenysh"));

//Challenge #11: Write a function to split a string and convert it into an array of words.

function wordsIntoArray (string){
    let array = [];
    let words = string.split(" ");
    console.log(words);
    words.map(word => array.push(word));

    return array;
}

console.log(wordsIntoArray("Hello World"));

//Split( ) splits a string and return it in an array ..but in above we have saved that in a different array


//Challenege # 12 : create a function that randomly display rock paper scissors

const randomRPS = () => {
    let randomChoice = Math.random();
    if(randomChoice < 0.33){
        return 'rock'
    }else if(randomChoice < 0.66){
        return 'paper'
    }else{
        return 'scissors'
    }
}

// randomRPS();


// Challenge #13: Considering the above as bot, compare your probability of win against the bot

const whoWins = (playerChoice) => {
    let botchoice = randomRPS();
    if( (playerChoice === 'rock' && botchoice === 'scissors') || (playerChoice === 'paper' && botchoice === 'rock') || ( playerChoice === 'scissors' && botchoice === 'paper')){
        console.log("You have won")
        document.getElementById('rps').innerHTML = `You have won!`;
    }else if(playerChoice === botchoice){
        console.log("It's a drawwwwwwwwwwww")
        document.getElementById('rps').innerHTML = `It's a draw!`;
    }else{
        console.log("The Bot has beaten you")
        document.getElementById('rps').innerHTML = `The Bot has beaten you!`;
    }
}

// whoWins('rock');

// Challenge #14 : Create a function that takes an array,
// Play the game 'x' times Where x is number of choices in array
//Print the result of each game to console


const playGame = (gamesarray) => {
    gamesarray.forEach(choice => whoWins(choice))
}

playGame(['rock', 'paper', 'scissors']);


//Challenge #14 - Day3: You are given the length and width of a 4-sided polygon. 
//The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
    if( l === w){
        return l*w
    }else{
        return 2*( l + w)
    }
  };

console.log(areaOrPerimeter(4,5));


// Challenge #15 - Day 3: Convert numbers into an array.
//Also reverse the array as well

function digitize(n) {
    let splitting = Array.from(String(n));
    console.log(splitting)

    let convert = splitting.map(item => Number(item)).reverse();
    console.log(convert)
}

digitize(547893);


// Challenge #16. Day 4: Given a random non-negative number, 
//you have to return the digits of this number within an array in reverse order.


function splitIntoArray(n) {
    let splitting = String(n).split('').map(item => Number(item)).reverse();
    return splitting;
}

splitIntoArray(348597);

//Challenge #17: Day 4: Clock shows h hours, m minutes and s seconds after midnight.

//Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    //#Happy Coding! ^_^
    let hoursMS = h*3600000;
    let minuteMS = m*60000;
    let secondMS = s*1000;
    
    let time = hoursMS + minuteMS + secondMS + "ms";
    console.log(time)
    return time;
  }

  past(2, 10, 45)

// Challenge#18 - Day4:There was a test in your class and you passed it. Congratulations!
//But you're an ambitious person. You want to know if you're better than the average student in your class.

//You receive an array with your peers' test scores. Now calculate the average and compare your score!

//Return True if you're better, else False!


  function betterThanAverage(classPoints, yourPoints) {
    let average = classPoints.reduce((a,b) => a+b)/classPoints.length;
    console.log(average);
    if(yourPoints > average){
        return true;
    }else{
        return false;
    }
  }

  betterThanAverage([23, 24, 17, 25, 15],14)

  //Challenge #19 -Day4:

  function simpleMultiplication(number) {
    if(number % 2 === 0){
      return number*8
    }else{
      return number*9
    }
}

    console.log(simpleMultiplication(17))


    //Challenge#1 - Day5: Create an array of numbers then sum all the numbers

    const accumulatedValue = (array) =>{
        let reduced = array.reduce((acc,c) => acc + c);
        console.log(reduced);
    }

    accumulatedValue([1,2,3,4,5,6,7,8,9,10])

    // Challenge #1 -- Day 6: Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection
    //For example: ["3:1", "2:2", "0:1", ...]
    //Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

    //if x > y: 3 points
    //if x < y: 0 point
    //if x = y: 1 point


    function points(games) {
        let total = 0;
        for (let i = 0; i < games.length; i++) {
          [x, y] = games[i].split(":");
          if (x > y) {
            total += 3;
          } else if (x === y) {
            total += 1;
          }
        }
        return total;
      }

    console.log(points(["3:1"]))

    // function points(games) {
    //     let pointstable = 0;
    //     for (let i = 0; i < games.length; i++ ){
    //       [x,y] = games[i].split(":");
    //       if (x>y){
    //        pointstable += 3
    //       }else if ( x === y){
    //         pointstable += 1;
    //       }
    //     }
    //     return pointstable;
    //   }


    // Dsay 7 -- Challenge #1: Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

//If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//If he doesn't get 10 hoops, return the string "Keep at it until you get it".

    function hoopCount (n) {
        let greetings = "";
        if(n>=10){
          greetings = "Great, now move on to tricks"
        }else{ 
          greetings = "Keep at it until you get it"
        }
        return greetings;
      }

      console.log(hoopCount(13))

// Day8 -- Challenge#1: 
//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
   console.log(s.replace(/!/gi , ""));
   return s.replace(/!/gi , "");
}

removeExclamationMarks("Hey! You gotta act wisely!")