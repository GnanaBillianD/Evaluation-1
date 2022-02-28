"use strict";
let ArrayInObject = [{ id: 1, name: "Stephen covey" }, { id: 1, name: "Stephen covey" },{ id: 1, name: "Stephen" }, { id: 3, name: "Tolstoy" }, { id: 4, name: "Tolstoy" }, { id: 3, name: "James clear" }];
let b = [];

// label1: for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < b.length; j++) {
//     if (b[j].id == a[i].id || b[j].name == a[i].name)
//       continue label1;
//   }
//   b.push(a[i]);
// }
// console.log(b);


function groupBy(objectArray) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj.id;//a[0].id
    if (!acc[key] ) { 
      acc[key] = [];
    acc[key].push(obj);
    }
    return acc
  }, {})
}storeZeros

let groupedPeople = groupBy(ArrayInObject);
console.log(groupedPeople)
