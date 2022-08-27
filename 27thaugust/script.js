function amIWilson(num) {
    // check if prime is Wilson
    (factorial(num - 1) + 1) / (num * num) % 1 === 0;
   
  }

  const factorial = (y)=>{
    if(y ===0 || y ===1 ){
        return 1
    } else {
        return console.log(y * factorial(y-1));
    }
  }

  amIWilson(9)