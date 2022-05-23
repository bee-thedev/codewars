//7kyu-Challenge
//Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()

//Task
//Coding in function topSecret, function accept 1 parameter:file. file is an encrypted string.

//Encryption using the right shift 3. 
//Your job is to decrypt the file and read the contents of the file, and 
//then answer my three questions. If the answer is correct, you will pass the test. 
//Note: the decryption should be left shift; Shift is only for uppercase and lowercase letters, 
//other characters will remain the same; The shift mode is a cyclic shift, for example:

// function topSecret(str){
//     //coding here...
    
//   }
//   //question1: The top secret file number is...
//   answer1="?";
//   //question2: Super agent's name is...
//   answer2="?";
//   //question3: He stole the treasure is...
//   answer3="?";


function topSecret(str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';

  console.log(str[6])
  alphabet += alphabet.toUpperCase();
  console.log(alphabet)
  var translate ='xyzabcdefghijklmnopqrstuvw';
  translate += translate.toUpperCase();
  var chars = str.split('');
  var result = '';
  for(var i = 0; i < chars.length; ++i)
    result += translate[alphabet.indexOf(str[i])] || str[i];
  return console.log(result);
}

topSecret("Pb qdph lv Mrkq")


//7kyu-Challenge:

//Task
//Coding in function infiniteLoop. function accept 3 parameters. 
//The 1st parameter is arr, it's a 2D array, it contains three 1D array. The 2nd parameter is d ，
//it's a string. The 3rd parameter is n, it's a number.

//You can think of arr as a moat, the elements of arr like water constantly flow in. 
//The direction of flow is controlled by the parameter d. 
//The value of d can be "left" or "right". "left" means the "river" moves to the left. 
//All elements in the 1D array are to the left moving n position, 
//if beyond the bounds of the array and the element is moved to the tail on the..
// left side of the array; if it exceeds the left boundary element would be moved to the ..
//tail of 3rd array(like a circle). Right is also similar to the operation, ..
//but it is moving to the right.

//Finally, return arr.

//Examples
//infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left",1) should return [[2,3,4],[5,6,7],[8,9,1]]
//infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",1) should return [[9,1,2],[3,4,5],[6,7,8]]
//infiniteLoop( [[1,2],[3,4,5,6],[7,8,9,10]],"left",2) should return [[3,4],[5,6,7,8],[9,10,1,2]]


function infiniteLoop(arr,d,n){
  if(d === "left"){
    for(let i = 0; i<=n; i++){
     arr[2].push(arr[0][i])
     arr[1].push(arr[2][i])
     arr[0].push(arr[1][i])
    }
     for(i=0; i<=n; i++){
    arr[0].shift()
    arr[1].shift()
    arr[2].shift()
    }
  }    
  if(d === "right"){
    for(let i = 1; i<=n; i++){
      arr[0].unshift(arr[2][arr[2].length-i])
      arr[1].unshift(arr[0][arr[0].length-i])
      arr[2].unshift(arr[1][arr[1].length-i])
    }
    for(let i=0; i<n; i++){
      arr[0].pop()
      arr[1].pop()
      arr[2].pop()
    }
  }
  return console.log(arr)
}  
  

infiniteLoop([[1,2,3], [4,5,6], [7,8,9]], "right", 1)


//7kyu-Challenge

//Task
//Coding in function sortIt. function accept 1 parameters arr, it's a number array. Your task is to..
// sort the array according to the specified conditions,
// and returns a new array(should not modify the original array).

//conditions1: according to the number of elements(in ascending order) for example:

//sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
//because [1,1,1,2,2,3] has one 3, two 2 and three 1
//conditions2: If the same number of elements, according to the number values(in descending order) for example:

//sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
//because number of 3,2 and 1 both are three, then according to 3>2>1
//Comprehensive two conditions should be like this:

//sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]


function sortIt(arr){
  let arr1 = arr.slice().sort((a,b)=>b-a)
  console.log(arr1)
  let sorted = arr1.sort((a,b)=>{
    let as = arr.slice().filter(x=>x===a)
    let bs = arr.slice().filter(x=>x===b)
    if(as.length===bs.length) return b-a
    if(as.length<bs.length) return -1
    if(as.length>bs.length) return +1
  })
  return console.log(sorted)
}

sortIt([1,2,3,4,4,5,5,6,6])


//7kyu-Challenge

//Task
//Coding in function isolateIt. function accept 1 parameters arr, it's a string array. 
//Your task is to put a character "|" into the middle of each element.

//If the string length is an even number, use the insert method. for example: 
//"abcd" should became "ab|cd". "|" should be inserted between ab and cd.

//If the string length is an odd number, use the replacement method. for example: 
//"abcde" should became "ab|de". Character c will be replaced by |.

//The original array should not be changed, you need to return a new array..
//(if you use the map method, you do not need to worry about this).

//Example
//isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
//isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
//isolateIt(["1234","56789"]) should return ["12|34","56|89"]


const drawSeparator = (array) =>{
  let splitCase = array.map((item)=>{
    let isolatIt = item.split("");
    if(item.length%2 === 0){
      isolatIt.splice(isolatIt.length /2, 0, "|")
      return console.log(isolatIt.join(""))
    }else{
      isolatIt.splice(Math.floor(isolatIt.length/2), 1, "|")
      return console.log(isolatIt.join(""))
    }
  })
  return splitCase
}

drawSeparator(["myname", "beenysh", "saeedo"])

//7kyu-Challenge -- Training JS #27: methods of arrayObject---filter()

//Task
//Coding in function countGrade. function accept 1 parameters scores, it's a number array. 
//Your task is to count the grade distribution of the scores, to return an object like this:

//{S:888, A:888, B:888, C:888, D:888, X:888}
//Grading rules:

//Grade S: Full marks(score=100)
//Grade A: score<100 and score>=90
//Grade B: score<90 and score>=80
// Grade C: score<80 and score>=60
// Grade D: score<60 and score>=0
// Grade X: score=-1(The cheating guy gets a score like that)
// Example
// countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
// countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}
// countGrade([-1,-1,-1,-1,-1,-1]) should return {S:0, A:0, B:0, C:0, D:0, X:6}

function countGrade(scores){
  let sortScores = scores.filter(score=>{
    let scoreObject = { };
    if(score === 100){
        return scoreObject.push(score)
    }
  })
  return console.log(sortScores)
}

countGrade([65,75,,85,85,95,100,100])