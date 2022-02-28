// "use strict"
// let c = 0;//number
// let d = false;//numeric number

// //console.log(typeof c == typeof d),// false
// console.log(c==d);//true
// console.log(c===d);//false


function foo() { 
    const a = b = 0;//we declare a "a" value (var, let)in function scope, that's why we can't access this value at global
    //we assingn a "b" value in global, that's why it will access at anywhere(global scope)
    a++;
    return a;
}
foo();
console.log(typeof a, typeof b);//bending
console.log(b);