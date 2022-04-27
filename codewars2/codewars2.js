//Day11 -Challenge#1 : String Cleaning
// Clean the string off all the numbers that is thrown in by mistake or whatever
// However Keep the special characters and spacing in tact

//'! !'                 -> '! !'
//'123456789'           -> ''
//'This looks5 grea8t!' -> 'This looks great!'

function stringClean(s){
    let cleaning = s.replace(/[0-9]/g,"")
    return cleaning;
  }

  console.log(stringClean("My name5 is beenysh0"))

  //Day11-Challenge#2: Complete the solution so that it reverses the string passed into it.
  //'world'  =>  'dlrow'
//'word'   =>  'drow'

function solution(str){
  let reversed = str.split("").reverse().join("")
  return reversed
}

console.log(solution("Beenysh"))