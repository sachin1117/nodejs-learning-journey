// Leap year check

function Leapyear() {

  let year = 2025;

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }


}

module.exports = Leapyear;