let a = "abcdefghijklmn";
let reverse = "";
if (typeof a === "string") {
    for (let i = 1; i <= a.length; i++) {
        let b = a[a.length - i];
        reverse += b;
    }
} else {
    console.log("enter string value")
}

console.log(reverse);