"use strict";
function objcmp(obj1, obj2) {

    //copy properties into A and B
    let A = Object.getOwnPropertyNames(obj1);//returns an array of all properties names
    let B = Object.getOwnPropertyNames(obj2);
    // console.log(A, B)//[ 'id', 'name' ] [ 'id', 'name' ]
    // console.log(A.length)//2
    
    //return early if number of properties is not equal
    if (A.length != B.length)
        return false;

    //compare all properties on both objects
    for (let i = 0; i < A.length; i++) {
        let propName = A[i];
        if (obj1[propName] !== (obj2[propName]))
            return false;
    }
    //objects are equal 
    return true;
}


//creaate objects
let object1 = { id: 1, name: "edison" };
let object2 = { id: 1, name: "edison" };
let object3 = { id: 1, name: "edison" };
let object4 = { id: 2, name: "edison" };

console.log(objcmp(object1, object2));//true
console.log(objcmp(object3, object4));//false    (id number not match)
