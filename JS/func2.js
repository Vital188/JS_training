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

let marks = [7, 8, 11, 15, 14];
let mark = 0;
let suma = 0;

for (let i = 0; i < marks.length; i++) {
mark += marks[i];  
suma += marks[i];}

console.log('vidurkis =',suma/marks.length);
console.log(mark);
console.log(suma);

console.clear();

function isrinktiRaides(pirmas, antras)  {

if (typeof pirmas !== 'string') {
    return "Pirmasis kintamasis yra netinkamo.";
}
if (pirmas === "" || pirmas.length > 100) {
    return "Pirmasis kintamasis yra netinkamo tipo.";
}
if (typeof antras !== 'number'|| !isFinite(antras)) {
    return "Antrasis kintamasis yra netinkamo tipo.";
}
if (antras === 0 || antras % 1 !== 0) { 
    return "Antrasis kintamasis turi būti didesnis už nulį.";
}

if (pirmas.length < antras) {
    return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį";
}


let result = '';

 for (let i=antras-1; i < pirmas.length; i += antras) {
 result += pirmas[i];}

 return result

}

console.log(isrinktiRaides("abcdefghijkl", 3 ));
console.log(isrinktiRaides("abcdefg", 2 ));
console.log( isrinktiRaides( "abcdefghijkl", 3 ) );
console.log( isrinktiRaides( "abc", 0 ) );
console.log( isrinktiRaides( "abc", 4 ) );
console.log( isrinktiRaides( 1561, 2 ) );  


console.clear();

let number = 0;

function index(array, n){
if (array.length <= n) { return -1;}

for (let i=0; i <= n; i ++) {
number = array[i];}
return number**n;}

console.log(index([2, 6, 5], 3));
console.log(number);

console.clear();
const abc = "Position of alphabet:";
let num=0;
function position(letter){
let alphabet ='abcdefghijklmnopqrstuvwxyz';
for (let i=1; i <= alphabet.length; i++) {
  num = alphabet.indexOf(letter)+1;}
  return "'position of alphabet:" + num + "'";

}

console.log(position('v'));

console.clear();


function opposite(number) {
let post = 0;
if (number ===0) { return 0};
if (typeof number === 'number' || number !==0) {post = number * -1;};
return post
} 

console.log(opposite(-3.33333));

console.clear();

function sum (numb) {
if (typeof numb === 'number') {return 0};

let suma = 0;
for (let i=0; i < numb.length; i++) {
    suma += numb[i];}
return suma;
}

console.log(sum([4, 7]));


let size =0;
function filter_list(l) {
for (let i=0; i < l.length; i++) {
if (typeof l === 'number') {size = l[i]};}
return size;
}
console.log(filter_list([5, 0, 'a', -5, 'f', 110, 15]));

console.clear()


function positiveSum(arr)  {
    let sum = 0;
    for (let i=0; i < arr.length; i++) {
    if (arr[i] > 0) {sum += arr[i];}}
    return sum
    }

console.log(positiveSum([1,-2,3,4,5]));

console.clear()

function maps(x){
for (let i=0; i < x.length; i = i*i){
let rezultat = 0;
rezultat = x[i];}
return rezultat
}

console.log(maps([3,4,5]));
