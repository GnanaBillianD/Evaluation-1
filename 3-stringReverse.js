let a = "abcdefghijklmn";
let reverse = "";

for (let i = 1; i <= a.length; i++) {
    let b = a[a.length - i];
        reverse += b;
}
console.log(reverse);