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