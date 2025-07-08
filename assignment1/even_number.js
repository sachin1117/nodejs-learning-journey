//even number print use of list

function evenNumber() {

  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0)
      console.log(number[i]);
  }


}

module.exports = evenNumber;
