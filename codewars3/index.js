//Day16- Challenge#1:

//Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, 
//but they are not capitalized in the same way he originally typed them.

//Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
    let splitstring = this.split(" ");
    for(i=0; i<splitstring.length; i++){
        splitstring[i] = splitstring[i].CharAt(0).toUpperCase() + splitstring[i].substring(1);
    }
    return splitstring.join(' ');
  };

  console.log(str.toJadenCase())