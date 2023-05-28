// Arrow function in javascripts

// Arrow function is generally short form of 'Function Expression" here use the => sigh to identify the arrow function
// Deff between traditional function and arrow function
// Arrow function doesn't exist the 'this' keyword but in traditional function has 'this' keyword

// Function expression
const calAge = function (birthday){
    return 2023-birthday;
}
const result = calAge(1995);
console.log(result)

// Arrow function 
// no need to use return keyword or {} in arrow function if it's a single line;

const calAge1 = birthday  => 2023-birthday;
// with single parameter
const result1 = calAge1(1995);
console.log(result)
// with duble parameter
const yearsUntileRetirement = (birthday,firstName ) =>{
    const age = 2040 - birthday;
    const retirement = 65 - age;
    return `${firstName} will retire after doing job ${retirement} years`;
}
console.log(yearsUntileRetirement(1995,'Md Ayub ali'))