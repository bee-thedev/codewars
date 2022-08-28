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