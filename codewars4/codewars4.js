//8kyu-Challenge 

//Task
//Implement a function which accepts 2 arguments: string and separator.

//The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

//For example:

//splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
//splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
//splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
//splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

function splitAndMerge(string, separator) {
        let splitstring = string.split(" ")
        let splitted = splitstring.map((word)=> word.split("").join(separator)).join(" ")
        console.log(splitted)
    }



 splitAndMerge("bee the dev", "-")


 //8kyu-Challenge: Use of indexOf(), lastIndexOf() and search()

 //Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

//Please return the gap between the first position of c and the last position of c.

//If there are a lot of c in the str, should return a positive integer; 
//If there is only one c in str, should return 0; If there is no c in the str, should return -1. 
//Retrieval should not ignored the case.

//for example:

//firstToLast("ababc","a") should return 2(2-0)
//firstToLast("ababc","c") should return 0(4-4)
//firstToLast("ababc","d") should return -1


function firstToLast(str,c){
    let firstIndex = str.indexOf(c)
    console.log(firstIndex)
    let lastIndex = str.lastIndexOf(c)
    console.log(lastIndex)
    
    let thegap = "";

    lastIndex === -1 && firstIndex === -1 ? thegap = -1 + (lastIndex - firstIndex) :
    lastIndex > firstIndex ? thegap = lastIndex - firstIndex :
    lastIndex === firstIndex && lastIndex != -1 && firstIndex != -1 ? thegap = lastIndex - firstIndex: ""

  return console.log(thegap)
  }

firstToLast("catchytinsbesturator", "c")