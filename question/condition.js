function conditionalexample() {
  let score = 85;

  if (score > 80) {
    console.log("gread A");
  } else if (score > 70) {
    console.log("gread B");

  } else {
    console.log("gread c");
  }

  let day = "monday";

  switch (day) {
    case "monday": {
      console.log("start of the week");
    }
      break;

    case "sunday": {
      console.log("end of week ");
    }
      break;

    default: {
      console.log("Midweek");
    }
  }
   let pass = score=> 50 ? "passed" : "failed";
    console.log(pass);
}
module.exports = conditionalexample;