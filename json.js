let employee = {
    firstName:"sri",
    lastName:"bhagi",
    depart:"ECE",
};
//convert to json string
let jsonValue = JSON.stringify(employee);
console.log(jsonValue);
//convert json to object
let newEmp=JSON.parse(jsonValue);
console.log(newEmp);
//math
let num1=5.483344;
console.log(`Round: ${Math.round(num1)}`);
console.log(`ceiling: ${Math.ceil(num1)}`);
console.log(`floor: ${Math.floor(num1)}`);

//fixed
let fixed=num1.toFixed(3);
console.log(`fixed Type: ${typeof(fixed)} fixed value: ${fixed}`);


//display in locale-speific format
let num2=1_000_000;
console.log(`USA: ${num2.toLocaleString('en-US')}`);