"use strict";
let a = [{id: 1, name: "Stephen covey" }, {id: 2, name: "Stephen covey"}, {id: 3, name:"Tolstoy"},{id:3,name: "Tolstoy"}, {id: 5, name: "James clear"}];
let b=[];

label1: for (let i =0; i< a.length;i++){ 
          for(let j =0; j<b.length; j++){
            if(b[j].id==a[i].id || b[j].name==a[i].name)
              continue label1;
    }
    b.push(a[i]);
}
console.log(b)