let n = 10;
let odd = 0;
let even = 0;
let i = 1; 
while(i <= n){
  if(i % 2 == 0){
    even += i;
  } else {
    odd += i;
  }
  i++; 
}
console.log(odd, even);