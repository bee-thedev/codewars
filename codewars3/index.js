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


  




















