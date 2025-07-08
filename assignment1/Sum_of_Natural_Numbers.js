//Sum of Natural Numbers

function Sum_of_Natural_Numbers() {

  let number = 10;
  let sum = 0;
  for (let i = 1; i <=number; i++) {
    sum += i;
  }
  console.log(sum);
}

module.exports = Sum_of_Natural_Numbers;