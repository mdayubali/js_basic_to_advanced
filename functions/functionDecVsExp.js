// function declaration vs Expression
// function call with declaration and expression has the same result but you cann't use Hoisting for the expression.

// Histing means call the function before declare 
// Hoisting allow to fucntion declaration.
const myName = yourName("Ali Ershad");
console.log(myName)
// Declare function
function yourName(name){
    return name;
}
// const myName = yourName("Ali Ershad");
// console.log(myName)

// Function expression
// It's not allow for the hoisting
// console.log(myName1('Md Ayub Ali')) 
const myName1 = function(name){
    return name;
}
console.log(myName1('Md Ayub Ali'))