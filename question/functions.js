function functionexample() {
    function x(name) {
    return  `this is ${name}`
    }
    //arrow fun
    const square = n => n*n;
    //default parameter
    function df(msg="Hello") {
        console.log(msg);
    }
    //returns object
    function getusers() {
        return {name:"Sachin",age:20};
    }
    //nested function
    function outer () {
        function inner() {
            return "inner function";
        }
        return inner();
    }
    console.log(x("good"));
    console.log(square(5));
    df();
    console.log(getusers());
    console.log(outer());
}
module.exports = functionexample;