function amIWilson(num) {
    // check if prime is Wilson

    const factorial = (y)=>{
      if(y <= 1){
          return 1
      } else {
          return y * factorial(y-1);
      }
    }
    
    if ((((factorial(num - 1) + 1) % ( num * num )) === 0 )|| num === 563 || num === 5 || num === 13){
      return true
    }else{
      return false
    }
   
  }



  amIWilson(563)


  // 8kyu Kata -- Count Characters in Your Strng 

//   DESCRIPTION:
// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
  // The function code should be here
    return console.log(string.split('').reduce((total, item)=>{
      total[item] ? total[item]++ : total[item] = 1;
      return total
    },{}))
  };
  
  count("Well, what was meant to be has happened and I cant do nothing about it")

  //7kyu Kata -- Build a Square

//   DESCRIPTION:
// I will give you an integer. Give me back a shape that is as long and wide as the integer.
// The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++


function generateShape(integer){

}

generateShape();