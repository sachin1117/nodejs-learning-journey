
const chalk = require('chalk');
const variableexample = require('./question/variable');
const datatypeexample = require('./question/datatypes');
const conditionalexample = require('./question/condition');
const functionexample = require('./question/functions');


const evenNumber = require('./assignment1/even_number');
const FactorialNumber = require('./assignment1/FactorialNumber');
const multiplicationtable = require('./assignment1/multiplicationtable');
const Sum_of_Natural_Numbers = require('./assignment1/Sum_of_Natural_Numbers');
const largestNumber = require('./assignment1/LargestNumber');
const Leapyear = require('./assignment1/Leapyear_check');


console.log(chalk.blue("variable example"));
variableexample();
console.log(chalk.blue("datatype example"));
datatypeexample();
console.log(chalk.blue("conditional example"));
conditionalexample();
console.log(chalk.blue("function example"));
functionexample();


console.log(chalk.blue("function even number print using of list"));
evenNumber();
console.log(chalk.blue("Factorial of a Number"));
FactorialNumber();
console.log(chalk.blue("Multiplication table"));
multiplicationtable();
console.log(chalk.blue("Sum_of_Natural_Numbers"));
Sum_of_Natural_Numbers();
console.log(chalk.blue("largest Number"));
largestNumber();
console.log(chalk.blue("Leap year check"));
Leapyear();