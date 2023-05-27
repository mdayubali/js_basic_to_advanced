// A function is a simply a pieces of code that can be reuse over and over again.
// a variable can hold the value but a function can hold one or more complete line of code.

// Function hoisting only works with function declarations — not with function expressions.

function name(){
    console.log('My name is Ayub Ali  ');
    // there is no return value for this function
}

// calling/running/invoking function
name();
name();
name();
// A function have must a return value.
// without without return value a funtion result will be undifined.

function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
const result = fruitProcessor(4,5);
// console.log(fruitProcessor(4,5));
console.log(result);