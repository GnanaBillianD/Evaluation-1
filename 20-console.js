a=[1,2,3,3,4,5,5];
console.log(a)

console.group();
console.table(a)


console.dir(a)

console.groupEnd();

for(let i= 0; i<5 ;i++){
console.count("label");
}



let b = "racecar";
let reverse1 = "";
console.time();
for (let i = 1; i <= a.length; i++) {
    let c = b[b.length - i]; 
        reverse1 += c;

}console.timeEnd();





let x = 5;
let y = 2;
console.assert(x + y ==8, "expression returned 'false'");

