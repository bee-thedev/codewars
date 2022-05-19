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

