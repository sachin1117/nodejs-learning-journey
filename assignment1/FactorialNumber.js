//Factorial of a Number

function FactorialNumber() {

  let number = 5
  let result = 1;

  for (let i = 1; i < number; i++) {
    result = result * i;
    console.log(result);
  }

}

module.exports = FactorialNumber;
