console.clear();

function tusciaFunkcija() {
return false ;}

console.log(tusciaFunkcija())
;


console.clear();

let a = 2;
let b = 3;
let c = 5;

function daugyba(a,b){
let result = a*b;
return result;
}

console.log(daugyba(5,10));
console.log(daugyba(a,b));
console.log(daugyba(c,b));
console.log("rezultatai:", daugyba(a,b));
console.log("rezultatai:", daugyba(a,c));
console.log("rezultatai:", daugyba(c,b));

console.clear();


function skaitmenuKiekisSkaiciuje(goor) {
    if (typeof goor !== 'number' && !isFinite(goor)) 
       {return 'Pateikta netinkamo tipo reikšmė.';
    }
    const allowedSymbols = '0123456789';
    const numberAsString = ' ' + goor;
    let size = 0;

    for (let i = 0; i < numberAsString.length; i++) {
        const symbol = numberAsString[i];
        if (allowedSymbols.indexOf(symbol) >= 0) {
            size++;
        }
    }

    return size;
}

console.log(skaitmenuKiekisSkaiciuje(4.545));

console.clear();

function kablelis(dog) {

const alsymbols = ".";

let samm = 0;

if (dog.length >=0) {samm++};

return samm;
}
console.log(kablelis('...'));

console.clear()

let aa = 2;
let bb = 3;
let cc = 5;

function daugyba(aa,bb){
let result = aa*bb;
return result;
}

console.log(daugyba(5,10));
console.log(daugyba(aa,bb));
console.log(daugyba(cc,bb));
console.log("rezultatai:", daugyba(aa,bb));
console.log("rezultatai:", daugyba(aa,cc));
console.log("rezultatai:", daugyba(cc,bb));

console.clear()

function hasSurvived(attackers, defenders){

    const sum = attackers.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);

      const suma = defenders.reduce((accum, val) => {
        return accum + val;
      }, 0);
     
     const ap = sum - suma;
     let pot=0;
     let sop=0;

     for(i=0; i <attackers.length; i++) {
     if (attackers[i]> defenders[i]) {pot++};
     if (attackers[i]< defenders[i]) {sop++};
      }

    if (pot < sop)
       { return true}
    if (pot > sop)
    { return false}
    if (pot == sop && ap > 0 )
    { return false}
    else 
    { return true}

};

console.log(hasSurvived([2, 9, 9, 7, 1], [1, 1, 5, 8, 10]));

console.clear();

// function Converter(str) {
//   let dataStr = str.todataCase()
//   var newStr = ''
//   for(let i = 0; i < dataStr.length; i++){
//     const current = dataStr[i];
//     newStr += [current] ? [current] : '';
//   }
//   return newStr;
// }

// console.log(Converter('TTCCAAXX'));
// console.log(Converter('TTGG'));

console.clear();
  
const quarterOf = (month) => {
    if (month > 0 && month < 4)
    {return 1}
    if (month > 3 && month < 7)
    {return 2}
    if (month > 6 && month < 10)
    {return 3}
    if (month > 9 && month < 13)
    {return 4}
  }

  console.log(quarterOf(11))

  console.clear();

  function DNAStrand(dna){
    result = '';
    for(i=0; i < dna.length; i++) {
        if (dna[i] === 'A') { result += 'T';}
       else if (dna[i] === 'T') { result += 'A';}
       else if (dna[i] === 'C') { result += 'G'}
       else if (dna[i] === 'G') { result += 'C'}
         }
         return result
  }

  console.log(DNAStrand("GAAA"))

//   function DNAStrand(dna){
//     let sequence = {
//       "A": "T",
//       "T": "A",
//       "G": "C",
//       "C": "G"
//     }
//     return dna.replace(/A|T|G|C/g, function(matched){
//       return sequence[matched];
//     });
//   }

//   console.log(DNAStrand("GAAA"))

console.clear();

function derDieDas(wort){
    let data = wort.toLowerCase()
    results = '';
    for(i=0; i < data.length; i++) {
        if (data[i] === 'a') { results++;}
        else if (data[i] === 'e') { results++;}
       else if (data[i] === 'i') { results++;}
       else if (data[i] === 'o') { results++;}
       else if (data[i] === 'u') {results++;}
       else if (data[i] === 'ä') { results++;}
       else if (data[i] === 'ö') { results++;}
       else if (data[i] === 'ü') {results++;}
   }
   if (results < 2) {post = 'das ';}
   else if (results === 2 || results === 3) {post = 'die '}
   else if (results > 3) {post = 'der ';}
   return post + wort
}

console.log(derDieDas('OOOpa'))

console.clear();


// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse( data )
{
  rezultatas = 0;
  rezull = [];
  rez = '';
  re = '';
  for(i=0; i < data.length; i++) {
      if (data[i] === 'i') { rez++, rezultatas++;}
      else if (data[i] === 'd') {rez++,  rezultatas--;}
     else if (data[i] === 's') {rez++,  rezultatas **=2;}
     else if (data[i] === 'o') {  rezull.push(rezultatas)}
     
}
return rezull
}


// parse = data => {
//   let array = [];
//   let val = 0;
  
//   const options = {
//     i: () => val++,
//     d: () => val--,
//     s: () => val **= 2, 
//     o: () => array.push(val)
//   }
  
//   for (i = 0; i < data.length; i++) {
//     let character = data[i];
//     let command = options[character];
//     command();
//   }
  
//   return array;
// }

console.log(parse("dooisodo"))
console.log(parse("iiisdoso"))

console.clear();

function isInStrictMode(pat) {
  "use strict";
  return pat
  }


console.log(isInStrictMode(true) )


  
