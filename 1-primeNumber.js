"use strict"
function PrimeNumber(a) {
    if (typeof a === "number") {
        if (a === 2) {
            console.log("prime");
        }
        for (let i = 2; i < a; i++) {
            let b = a % i;
            if (b == 0) {
                console.log("not prime");
                break;
            }
            if (i === a - 1) {
                console.log("prime");
            }
        }
    } else {
        console.log("enter the number only ")
    }

}


PrimeNumber(2);
PrimeNumber(17);
PrimeNumber("dask");
PrimeNumber(11);