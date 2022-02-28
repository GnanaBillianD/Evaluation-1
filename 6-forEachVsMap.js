//forEach
//The forEach() method executes each array element.
// const array1 = [1,2,3,4];
// array1.forEach(element) =>{element= });
// let c= array1.forEach(element =>{  return element });////return undefined
// console.log(c)

// "use strict";
// let a=[1,2,3,4,5];

// a.forEach((num,index)=> { a[index] = num * 2; console.log(a[index])});//return undefined, at the same time Returns original array with transformed elements. doen't create a new array


// //map
let b=[6,7,8,9];
let map2 = b.map((e) => {
    console.log(e) 
 }  ) 
 console.log(map2);

let map = b.map(num=>  num * 2);
// console.log(map)//Returns new array with transformed element
console.log(b);//no changes in original array
