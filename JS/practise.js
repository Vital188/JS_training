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

function createDict(keys, values){
  let obj={};
  for (let i=0;i<keys.length;i++){
  obj[keys[i]]=values[i]!=undefined?values[i]:null;
  }
  return obj
}

console.clear();

function newYearCelebrations(takeOffTime, minutes) {
  abba = Array.from(takeOffTime);
  h = Number(takeOffTime.slice(0,2));
  m = Number(takeOffTime.slice(3,5));
  totalHour = 23 - h;
  totalMinutes = 60 - m;
  let hour = [];
  

  for (let i = 0; i < minutes.length ; i++) {
      // totalHour[i] = minutes[i]
      hour[i] = 60 * (totalHour + [i]) + totalMinutes;
    }
  

//   totalHour = '';
//   totalMinute = '';
//   timezone = [];
//   total = [];
//   totalTime = [];
//   pot = [];
//   let hour = []
//   let celebration = 0;
//   let zone = 0;

//   for (let i = 0; i < minutes.length; i++)
//   zone = minutes.length;
// for (let i = 0; i < takeOffTime.length ; i++) {
//   totalHour += takeOffTime[i]
//   hour = (24 - totalHour) * 60;}
// for (let i = 3; i < takeOffTime.length; i++) {
//   totalMinute += takeOffTime[i]
//   minute = 60 - totalMinute;
//   total = hour + minute;
//   if (total == 1440) {total = 0}
// }
// for (let i = 0; i < minutes.length; i++) {
//   timezone[i] = minutes[i]+60;}
// for (let i=0; i<zone; i++){
//   totalTime[i] = total + [i+1]*60;

// if (timezone[i] <= totalTime[i]) {celebration++}

// if (total == 0) {celebration = celebration -1};
// }
// if (total <= minutes[0] ) {celebration = celebration + 1};


// if (celebration == 0) {celebration = 1}

return  hour
}  

console.log(newYearCelebrations("23:35",[60, 90, 140]))