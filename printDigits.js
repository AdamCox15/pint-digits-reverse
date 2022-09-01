
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