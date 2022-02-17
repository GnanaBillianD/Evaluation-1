let n= 5;
let s= "";
let count =1

for (let i=1 ; i<n; i++){
    for (let j=0 ; j<i; j++){
        s += count + " ";
        count++;
    }
        s += "\n";
        // console.log(s)
        // s = "";
}
console.log(s);