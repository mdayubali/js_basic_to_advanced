// Expression vs Statement 
// Expression always produce a value. It can hold value, function or any thing
// statement work inside a block 

let expression = "Expression always produce a value";

let statement = 0;

if(statement){
    console.log('this is a statement');
}else{
    console.log(expression);
}

// Expression 
const square = function (n){
    return n*n;
}

console.log(square(5))