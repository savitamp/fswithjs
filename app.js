// //data types
// var str = "savi";
// var str1 ='manu';
// var str2=`hi manu and savi`;//template string backtick we can add multiple lines(es6)  ${} this is data expression/interpolation
// var num = 10;
// var num1=10.1;
// var test = true;
// //null istead of no value its adding(fill) empty value
// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof num1);
// console.log(`my name is 😄${str}
// my daughter name is 😂 ${str1}
// my salary is 💸${num}`);
// var test =null;
// console.log(typeof test);
// var test1;
// console.log(test1);
// var bool = true;
// console.log(typeof bool);
// //symbol it is for make it unique


// //let-block scope this variable available for prticular block local variable
// //var-global scope
// for (var i=0; i<10; i++)
// {
//     var name= "savita";
//     console.log(i)
// }//global scop
// console.log(name);

// for(let i =0;i<10; i++){
//     let username="patil";
//     console.log(i);
    
// }//black scope and to make local variable ,and make it constant use let/swapping not happing here

// console.log(username);
// username ="shashi";
// var username;
// //variable voisting or swapping or exchanging
// console.log(username);
// let myVariable = 'Bob';
// myVariable = 'Steve';
// console.log(myVariable);

//NON-PRimitive data types or object ref...


let languages = ['java','nodejs',undefined,null,true,1];
console.log(languages.length);

var array = ['java','phython','node'];

var array1 = new Array('java','node','net');
var text = "savi";

console.log(array);
console.log(array1);

//ES6 [],new array,array.ff,array
var array3 = Array.of('java','note','js');
var array4 = Array(50);
console.log(array3);
console.log(array4);
console.log(Array.isArray(array3));// checking is this array or what using array.isarray
console.log(Array.isArray(text));
console.log(typeof array,typeof array1,typeof text);


//converting string to array

var str = "hello students";
var strwitharr = str.split('') //it will split letters if give one space it will show one word and two space it will take whole sentence as array ES5

console.log(strwitharr);

var e6way = Array.from(str); //ES6
console.log(e6way);

let[...spread] = str;
console.log(spread.toString(""));
console.log(spread.join(''));




























 


























































































































































































































































































































































































































































