console.clear();


function didziausiasSkaiciusSarase(nomer) {
if (!Array.isArray(nomer))  
{return "Pateiktas blogas sąrašas.";}
 
if (nomer.length === 0) 
{return "Pateiktas sąrašas negali būti tuščias.";}

let biggest = -Infinity;

for (let i = 0; i < nomer.length; i++){
const skaicius = nomer[i];
if (skaicius > biggest)
{ biggest = skaicius ;}
}
return biggest

}

console.log(didziausiasSkaiciusSarase([47, 24, 33,78]));

console.clear()


console.count(47*2);

let marks = 0;
let mark = 0;

for (let i = 0; i < 9; i++) {
const grade = mark[i]
marks += grade;
}

console.log(grade);
