"use strict";
let array=[1,2,3,3,4,5,5];
console.log(array);//purpose for debugging the code

console.group();// creates a new inline group in the Web console log
console.table(array);//create a table,

let object = {id:1,name:"benni"}
console.dir(object); //If you want to take a look at all object’s properties and methods, you can print it Sout directly into the console using console.dir method


console.groupEnd();

for(let i= 0; i<5 ;i++){
console.count("label");//number of times that this particular call to count() has been called.
}



let word = "racecar";
let concat_The_Word_In_Reverse = "";
console.time();//timer you can use to track how long an operation takes.
for (let i = 1; i <= word.length; i++) {
    let concat_The_Word_In_Reverse = word[word.length - i]; 
        reverse1 += concat_The_Word_In_Reverse;

}console.timeEnd();




//The console.assert() method writes an error message to the console
let number1 = 5;
let number2 = 8;
console.assert(number1 + number2 ==8, "expression returned 'false'");//writes an error message to the console if the assertion is false . If the assertion is true, nothing happens.


//The console.trace() method outputs a stack trace to the Web console.
function traceMethod(){
    function traceMethod1(){
        console.trace();
    }traceMethod1();
}
traceMethod();