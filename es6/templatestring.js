// Template Strings use back-ticks (``) rather than the quotes ("") to define a string: 
// Template Strings allow both single and double quotes inside a string:
// Template Strings allow multiline strings:
// Template String provide an easy way to interpolate variables and expressions into strings.The method is called string interpolation.

// The syntax is: ${...}
// Template Strings allow variables in strings as well as Template Strings allow expressions in strings
const number = [4,54,46,64,234,554,4];
const students = {
    name: 'ali',
    age: 43,
    movies:['king khan','dhakaiya Mastan']
};

const temstring = `My name is ${students.name} and I'm ${students.age} years Old`;
console.log(temstring);