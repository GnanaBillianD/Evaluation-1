function PrimeNumber(a) {
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

PrimeNumber(9);
PrimeNumber();
PrimeNumber(121);
PrimeNumber(111);


