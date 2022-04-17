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

  //Challenge #8: