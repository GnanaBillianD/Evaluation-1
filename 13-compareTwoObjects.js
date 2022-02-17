function objcmp(a, b) {

    //copy properties into A and B
    let A = Object.getOwnPropertyNames(a);
    let B = Object.getOwnPropertyNames(b);
    // console.log(A, B)//[ 'id', 'name' ] [ 'id', 'name' ]
    // console.log(A.length)//2
    
    //return early if number of properties is not equal
    if (A.length != B.length)
        return false;

    //compare all properties on both objects
    for (let i = 0; i < A.length; i++) {
        let propName = A[i];
        if (a[propName] !== (b[propName]))
            return false;
    }
    //objects are equal 
    return true;
}


//creaate objects
let a = { id: 1, name: "edison" };
let b = { id: 1, name: "edison" };
let c = { id: 1, name: "edison" };
let d = { id: 2, name: "edison" };

console.log(objcmp(a, b));//true
console.log(objcmp(c, d));//false    (id number not match)
