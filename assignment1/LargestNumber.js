//find largest number

function largestNumber() {

  let number = [10, 25, 14, 13, 18, 25, 77, 92, 10, 84]
  let largest = number[0];


  for (let i = 1; i < number.length; i++) {
    if (number[i] > largest) {
      largest = number[i]
    }
  }
  console.log(largest);
}

module.exports = largestNumber;