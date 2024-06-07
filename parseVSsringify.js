// parse and stringify is used in json and object conversion
// JSON.stringify(var) to convert json 
// JSON.parse(var) to convert object

const details = {
    fastname: "ayub",
    lastname: "Ali",
    age: 29,
    profession: "Web Developer"
}
// object to json conversion 
const jsonDetails = JSON.stringify(details);
console.log(jsonDetails);
// json to object  

const objectConvert = JSON.parse(jsonDetails);
console.log(objectConvert);
