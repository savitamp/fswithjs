
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
//console.log(users['name']);
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

//create mutiple object within an array

var mulObject = [
    {
name : 'savita',
age : 26,
salary : 200000,
gender : 'female',
photo : 'https://cdn.pixabay.com/photo/2016/04/26/12/25/male-1354358_1280.png'
},
{
name : 'manu',
age : 6,
salary : 200000,
gender : 'female'
},
{
name : 'mahi',
age : 27,
salary : 200000,
gender : 'male'
}
]

console.log(mulObject);

//we can use reserve keyword for keys and should use key in single quote when using - space

// let users2 = {
//     'name-user' : 'savi',
//     for : 'hey for',
//     if : 'hey if',
//     while : 'hey cond'
// };
// console.log(users2);


// let users3 = {
//     name : 'anu',
//     age : 20,
//     company : 'cgi',
//     salary : 100000
// };
//  let me = Object.create(users3);   //copying objects from origin
//  me.name = 'sneha';
//  me.age = 29;
//  company : 'cgi';
//  salary :200;

//  console.log(me);
 
//convert array like object for iteration purpose

let emp = {
    id : 1,
    'emp-name' : 'manoj',
    'emp-age' : 20,
    'emp-location' : 'bijapur'

};
// let empconvertasArray = Object.entries(emp);

// empconvertasArray.forEach(element => {
//     console.log(element);
    
// });

//freez method should not change the origin value


let checkandObject = Object.freeze(emp);

emp['emp-name'] = 'sahi';
console.log(emp);

//backtics imp here to add multiline  within a object we can creat function/method
let emp1 = {
    id : 1,
    'emp-name' : 'manoj',
    'emp-age' : 20,
    'emp-location' : 'bijapur',
    alldata(){
        console.log(`${this['emp-name']} and 
                    ${this['emp-location']}
                    ${this['emp-age']}`);
    
    }
};
console.log(emp1.alldata);


//key and value
let student = {
name : 'ravi',
age : 56,
salary : 10000
};

let ArrayValues = Object.values(student);
let ArrayKeys = Object.keys(student);

console.log(ArrayValues);
console.log(ArrayKeys);
























































































