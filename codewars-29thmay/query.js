//Training JS #34: methods of Math---pow() sqrt() and cbrt()
// Task
// Coding in function cutCube. function accept 2 parameter: 
//volume and n. volume is the volume of a cube. If we cut the cube into n block.
// please determine whether the length of the cube is an integer. return true or false.

// For exmaple:
// volume=512, it can be divided into 8 blocks, each small cube side length is 4

// cutCube(512,8) should return true
// volume=512, it can be divided into 64 blocks, each small cube side length is 2

// cutCube(512,64) should return true
// If the side length of small cube is not a integer, should return false.

// cutCube(256,8) should return false
// cutCube(27,3) should return false
// cutCube(123,456) should return false
// If it can't be divided evenly into n small cubes, should return false too.

// cutCube(50000,50) should return false
// cutCube(256,4) should return false
// The two examples above seems to meet our requirements, 
//but please note: a cube is unable to evenly divided into 50 pieces or 4 pieces. 
//Only cubic numbers(such as 8,27,64,125,216...) can be used to divide the cube evenly.


function cutCube(volume,n){
 let divideVol =Math.cbrt(volume);
 let divideNumber = Math.cbrt(n);
 let volByNumber = Math.cbrt(volume/n)

 

 if(Number.isInteger(divideVol) && Number.isInteger(divideNumber) && Number.isInteger(volByNumber)){
     return true;
 }else{
     return false;
 }
}
  cutCube(256,8)


//   Training JS #36: methods of Math---kata author's lover:random()

// Task
// Coding in function rndCode. Your task is to generate a random verification code. 
//In accordance with the following rules:

// the code length should be 8;

// The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".

// The 3rd-6th characters should be four numbers.

// the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".

// If Your code runs 100 times, It should generate 100 non duplicate verification codes.

// Some valid verification code examples:

// AB1234#$ MG6145$@ KJ2249@&
// CD5678%^ IG7593~% FH8638@&
// EF9012!@ GB7047%$ KD7604^%

function rndCode(){
   let code ='';
   let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let numbs = "0123456789";
   let charsOnly = "~!@#$%^&*";

   for(let i = 0; i < 2; i++){
     code = code + letters[Math.floor(Math.random()*letters.length)];
     console.log(code)
   }

   for(let i= 0; i < 4 ; i++){
     code = code + numbs[Math.floor(Math.random()*numbs.length)];
     console.log(code)
   }

   for (let i = 0; i < 2; i++){
     code = code + charsOnly[Math.floor(Math.random()*charsOnly.length)]
     console.log(code)
   }
   return code;
  }

rndCode()

//Training JS #37: Unlock new weapon---RegExp Object

// Task
// Coding in function countAnimals. function accept two parameters: animals, ..
//a string contains some animals; count, an array list of which animals we should count. 
//The result should be a number array.

// Examples
// countAnimals("dog,cat",["dog","cat"]); //=> [1,1]
// countAnimals("dog,cat",["dog","cat","pig"]); //=> [1,1,0]
// countAnimals("dog,dog,cat",["dog","cat"]); //=> [2,1]
// countAnimals("dog,dog,cat",["pig","cow"]); //=> [0,0]

function countAnimals(animals,count){
  let array = []
  for(let i =0; i< count.length; i++){
   let match = animals.match(new RegExp(count[i],"g")||[])
   if (match === null) {
    array.push(0);
  } else {
    array.push(match.length);
  }
  }
  return console.log(array);
}

countAnimals("dog,cat",["dog","cat"])