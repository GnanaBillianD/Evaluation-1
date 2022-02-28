"use strict";
let multiDimentionalArray = [1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]];
////creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let flatArray = multiDimentionalArray.flat();
console.log(flatArray);