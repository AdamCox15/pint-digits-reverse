
    let rev = 0;
    let lastDigit;
    let num = 123456;

    while(num !== 0){ 
        lastDigit = num % 10; 
        rev = rev * 10 + lastDigit;
       num = Math. floor(num/10); 
    }
console.log(rev);

function printDigits(num) {
    let digit = 0
    let reverseNum = 0
    while(num > 0){
        digit = num % 10
        reverseNum = reverseNum * 10 + digit
        num = Math.floor(num/10)
    }
    return reverseNum
}

console.log(printDigits(384))

function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )                 
  }

  console.log(reversedNum(00998877));

  const reverse = (num) => {
   let reversed_number = 0;
    while (num != 0) {
    reversed_number *= 10;
    reversed_number += num % 10;
    num -= num % 10;
    num /= 10;
    }
    return reversed_number;
    }

    console.log(reverse(123456789000))

    const printDigits =(num)=>{
        let mod = 0
        let answer = 0
        let zero =''
        if(num % 10 === 0){
          zero ='0'
        }
        while(num > 0){
          mod = num % 10 
         answer = answer * 10 + mod
          num = Math.floor(num/10)
      
        }
          return zero + answer
      }
      
      console.log(printDigits(3690))

      const printDigits = (num) => {
        while(num){
          let digitToPrint =  num % 10 
          console.log(digitToPrint) 
          num = (num - digitToPrint) / 10 
        }
      }