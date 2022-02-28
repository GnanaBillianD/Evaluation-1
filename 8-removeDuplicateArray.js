"use strict";
let duplicate_Array= [1,1,2,3,4,1,2,3,2,5];
let removed_Duplicate_Value_From_Array=[];

let stored_The_Filter_Value= duplicate_Array.filter((value,index)=>duplicate_Array.indexOf(value)==index)
console.log(stored_The_Filter_Value)
// label1: for (let i =0; i< a.length;i++){
//     for(let j =0; j<i; j++){
//         if(b[j]==a[i])
//             continue label1;
//     }
//     b.push(a[i]);
// }
// console.log(b)

duplicate_Array.forEach((value)=>{
    if(!removed_Duplicate_Value_From_Array.includes(value)){
        removed_Duplicate_Value_From_Array.push (value)
    }
  
})
console.log(removed_Duplicate_Value_From_Array);





