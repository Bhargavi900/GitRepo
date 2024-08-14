//creating obj
const obj={
    firstName:"sri",
    lastName:"bhagi"

};

//creating a Map
const map1=new Map();
map1.set("firstName","sri");
map1.set("lastName","bhagi");
console.log(map1);

console.log(`MapSize: ${map1.size})`);

//creating set
const set1=new Set();
set1.add("satyaa");
console.log(`Set size: ${set1.size}`);

//adding in complex values
const team1 =new Set();
const emp1={
    firstName:"bhuvi",
    lastName:"shannu"
};

team1.add(emp1);
console.log(`Ste size: ${team1.size}`);

// set has a obj
console.log(` dose set has obj: ${team1.has(emp1)}`);