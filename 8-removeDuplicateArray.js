a= [1,1,2,3,4,1,2,3,2,3,4];
b=[];

label1: for (let i =0; i< a.length;i++){
    for(let j =0; j<i; j++){
        if(b[j]==a[i])
            continue label1;
    }
    b.push(a[i]);
}
console.log(b)





// let x = [1,2,9,4,5,8,3,5,1,4,5];
// let y = [...new Set(x)];

// console.log(y);


