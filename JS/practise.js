function Hero (name) {
  this.name = name || 'Hero',
  this.position = '00',
  this.health = 100,
  this.damage = 5,
  this.experience = 0
};

console.clear();

function race(v1, v2, g) {
  let time = [];
if (v1 >= v2) {tiem = null} 
}

console.clear();

function hammingDistance (a, b) {
	arra = Array.from(a);
  arrb = Array.from(b);
  let result = 0;
  for (let i = 0; i <= arra.length; i++) {
    if (arra[i] != arrb[i]) {result++}
  }
  return result
}

console.log(hammingDistance('', ''))

console.clear();

function solve(s){
upper = (s.match(/[A-Z]/g)|| []).length; 
lower = (s.match(/[a-z]/g)|| []).length;
numb = (s.match(/[1-9]/g)|| []).length;
special = (s.match(/[!@#$%^&*()^_+\-=\[\]{};'`:"~\\|,l.<>\/?$]/gi)|| []).length;
result = [upper, lower, numb, special];
return result
 }

console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"))

console.clear();

function sumOfMinimums(arr) {
  let minvalue = [];
  let sum = 0;
  let sortarr = [];
 for (let i = 0; i <arr.length; i++) {
    sortarr[i] = arr[i].sort(function(a, b){return a-b});
    minvalue[i] = sortarr[i][0];
 } 
 for (let j = 0; j < minvalue.length; j++) {
  sum += minvalue[j];
 }
 return sum
 } 
  



console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))

console.clear();

copy = Array.from(Array(10).keys())

function setReducer(input) {
let copy = [];
let pot = [];
let doubled = [];
let rez = [];
let hot = [];
// while (copy.length = 1) {
  
// copy = input.forEach(element => {
//   (input[element] || 0) + 1;})
//   // if (copy.length === 1) 
//   //   break;}
 
 doubled = new Set(input)

input.forEach(element => {
  pot[element] = (pot[element] || 0) + 1;
});
// pot.forEach(element => {
//   doubled[element] = (doubled[element] || 0) + 1;
// });

// doubled.forEach(element => {
//   rez[element] = (rez[element] || 0) + 1;
// });

// rez.forEach(element => {
//   hot[element] = (hot[element] || 0) + 1;
// });

// for (let i = 0; i < input.length; i++){
// copy = ++input[i]
// }
return pot 
}


console.log(setReducer([9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2]))