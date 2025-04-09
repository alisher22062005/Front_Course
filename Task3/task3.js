let salaries={
    Aroo:100,
    Dalida:160,
    Samat:130
}

let cnt=0;
for(let value in salaries ){
    cnt+=salaries[value];
   
}

console.log(cnt)