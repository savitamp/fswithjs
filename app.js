
//objects at the end of boject dont use semicolon only use colon and loct dont use any colon
let users = {
    //key : value,
    //name = "savita",  //Uncaught SyntaxError: Invalid shorthand property initializer   if used = gives this error
    name : "savita",
    age : 27,
    company : "bindbind",
    salary : 30000,
    skills : ["java","node","php","sql",20,true,false,undefined,null]
}
// users.name
// users.age
// users.company
// users.salary
//console.log(users['name]);
console.log(users.name);
console.log(users.skills);

//creating of object in constructor way

let obj = new Object();
obj.name = 'manu';
obj.age = 20;
obj.salary = 20000;
console.log(obj);

//ES5

let name ="savita";
let age = 20;

let objectData = {
name : name,
age : age,
salary: 30000
}
console.log(objectData);


//ES6

let newData = {
    name,
    age,

}

console.log(newData);


























































