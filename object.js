//create an object with an object literal
let obj1={};
//create an object with a constructor
let obj2=new Object();
obj1.firstName="sri";
obj1.lasttName="bhagi";
obj1.isActive=true;
console.log(obj1);
let obj3={
    firstName:"krish",
    lastName:"Bhagi",
    isActive:true
};
console.log(obj3);
//Accesing properties from obj
console.log(`First Name: ${obj3.firstName}`);
console.log(`First Name: ${obj3["lastName"]}`);
//deleting
delete obj3.firstName;
console.log(obj3);
let obj4=obj3;
obj4.lastName="sri";
console.log(obj3);