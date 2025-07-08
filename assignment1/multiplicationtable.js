// Multiplication table


function multiplicationtable() {

  let number = 5;

  for (let i = 1; i <=10; i++) {
    let result = number * i;
    console.log(number," X",i,"=",result);

  }
}

module.exports=multiplicationtable;