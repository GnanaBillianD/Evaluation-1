function PrimeNumber(a) {
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
}

PrimeNumber(2);
PrimeNumber(1);
PrimeNumber(9);
PrimeNumber(11);