"use strict"
let people = [{id: 1, name: "edison" }, {id: 2, name: "Annand" }, {id: 3, name: "Vasnath"},  {id: 3, name: "benni"}, {id: 1, name: "karthi" }]



let a = people.reduce((key, value)=> {
    key[value.id]= key[value.id] + 1 || 1;
    return key
},{});
console.log(a)













// function groupBy(objectArray, property) {
//     return objectArray.reduce(function (acc, obj) {
//       let key = obj[property]; 
//       if (!acc[key]) {
//         acc[key] = []; 
//       }
//       acc[key].push(obj)
//       return acc
//     }, {})
//   }
  
//   let groupedPeople = groupBy(people, 'id')
//   console.log(groupedPeople)
