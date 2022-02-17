let i, j, k;
let odd = 1;
let space = 5;
let pattern = "";

for (i = 0; i < 9; i++) {
    if (odd % 2 != 0) {
        for (j = 1; j < space; j++) {
            pattern = pattern + " ";
        }
    }
    if (odd % 2 != 0) {

        for (k = 0; k < odd; k++) {
            pattern += "*";
        }
        --space;
        pattern += "\n";
    }
    odd++;
}
// Reverse
space = 1;
odd = 7;

for (i = 0; i < 10; i++) {

    if (odd % 2 != 0) {
        for (j = 0; j < space; j++) {
            pattern = pattern + " ";
        }
    }
    if (odd % 2 != 0) {

        for (k = 0; k < odd; k++) {
            pattern += "*";
        }
        ++space;
        pattern += "\n";
    }
    odd--;
}
console.log(pattern);