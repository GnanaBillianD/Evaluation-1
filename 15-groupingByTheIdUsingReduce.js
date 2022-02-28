"use strict"
let people = [{ id: 1, name: "edison" }, { id: 2, name: "Annand" }, { id: 3, name: "vasanth" }, { id: 3, name: "vasanth" }, { id: 1, name: "edison" }]



// let a = people.reduce((key, value) => {
//     key[value.id] = key[value.id] + 1 || 1;
//     return key
// }, {});
// console.log(a)



function groupBy(objectArray) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj.id
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people);
console.log(groupedPeople)



// a={a:1,b:2};//{a: 1, b: 2}
// b={};
// b[a.a];//undefined
// b[a.a]=b[a.a]+1;//  NaN
// b[a.a]=b[a.a]+1||1;//  NaN||1=1

