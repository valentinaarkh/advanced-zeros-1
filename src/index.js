module.exports = function getZerosCount(number, base) {
  let num = number;
  let b = base;
  let primes = [];
  let temp;
  let pow;
  let result = 0;
  for ( let i= 2; i <= b; i++ ){
    temp = 1;
    pow = 0;
    while ( b % i == 0 ){
      temp *= i;
      pow ++;
      b = b/i;
    }
    if ( temp != 1 ){
      primes.push(temp);
      let temp_divider = i;
      let count = 0;
      while ( temp_divider <= num){
        count += Math.floor(num / temp_divider);
        temp_divider *= i;
      }
      if (result == 0){
        result = Math.floor( count / pow );
      }else{
        if ( result > Math.floor( count / pow ) ){
          result = Math.floor( count / pow );
        }
      }
    }
  }
  console.log(result);
  return result;
}

// getZeroCount(10, 10);
// Result: 75122

// function getZeroCount(number, base){
//   let num = number;
//   let b = base;
//   let primes = [];
//   let temp;
//   let pow;
//   let result = 0;
//   for ( let i= 2; i <= b; i++ ){
//     temp = 1;
//     pow = 0;
//     while ( b % i == 0 ){
//       temp *= i;
//       pow ++;
//       b = b/i;
//     }
//     if ( temp != 1 ){
//       primes.push(temp);
//       console.log(i, temp, pow);
//       let temp_divider = i;
//       let count = 0;
//       while ( temp_divider < num){
//         count += Math.floor(num / temp_divider);
//         temp_divider *= i;
//       }
//     console.log ("Check temp number ", i, count );
//       if (result == 0){
//         result = Math.floor( count / pow );
//       }else{
//         if ( result > Math.floor( count / pow ) ){
//           result = Math.floor( count / pow );
//         }
//       }
//     }
//   }
//   console.log(result);
//   console.log(primes);
//   return result;
// }
