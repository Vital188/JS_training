console.clear();

function tusciaFunkcija() {
  return false;
}

console.log(tusciaFunkcija());

console.clear();

let a = 2;
let b = 3;
let c = 5;

function daugyba(a, b) {
  let result = a * b;
  return result;
}

console.log(daugyba(5, 10));
console.log(daugyba(a, b));
console.log(daugyba(c, b));
console.log("rezultatai:", daugyba(a, b));
console.log("rezultatai:", daugyba(a, c));
console.log("rezultatai:", daugyba(c, b));

console.clear();

function skaitmenuKiekisSkaiciuje(goor) {
  if (typeof goor !== "number" && !isFinite(goor)) {
    return "gadeikta netinkamo tipo reikšmė.";
  }
  const allowedSymbols = "0123456789";
  const numberAsString = " " + goor;
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

  if (dog.length >= 0) {
    samm++;
  }

  return samm;
}
console.log(kablelis("..."));

console.clear();

let aa = 2;
let bb = 3;
let cc = 5;

function daugyba(aa, bb) {
  let result = aa * bb;
  return result;
}

console.log(daugyba(5, 10));
console.log(daugyba(aa, bb));
console.log(daugyba(cc, bb));
console.log("rezultatai:", daugyba(aa, bb));
console.log("rezultatai:", daugyba(aa, cc));
console.log("rezultatai:", daugyba(cc, bb));

console.clear();

function hasSurvived(attackers, defenders) {
  const sum = attackers.reduce((accumulator, n) => {
    return accumulator + n;
  }, 0);

  const suma = defenders.reduce((accum, val) => {
    return accum + val;
  }, 0);

  const ap = sum - suma;
  let pot = 0;
  let sop = 0;

  for (i = 0; i < attackers.length; i++) {
    if (attackers[i] > defenders[i]) {
      pot++;
    }
    if (attackers[i] < defenders[i]) {
      sop++;
    }
  }

  if (pot < sop) {
    return true;
  }
  if (pot > sop) {
    return false;
  }
  if (pot == sop && ap > 0) {
    return false;
  } else {
    return true;
  }
}

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
  if (month > 0 && month < 4) {
    return 1;
  }
  if (month > 3 && month < 7) {
    return 2;
  }
  if (month > 6 && month < 10) {
    return 3;
  }
  if (month > 9 && month < 13) {
    return 4;
  }
};

console.log(quarterOf(11));

console.clear();

function DNAStrand(dna) {
  result = "";
  for (i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "T";
    } else if (dna[i] === "T") {
      result += "A";
    } else if (dna[i] === "C") {
      result += "G";
    } else if (dna[i] === "G") {
      result += "C";
    }
  }
  return result;
}

console.log(DNAStrand("GAAA"));

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

function derDieDas(wort) {
  let data = wort.toLowerCase();
  results = "";
  for (i = 0; i < data.length; i++) {
    if (data[i] === "a") {
      results++;
    } else if (data[i] === "e") {
      results++;
    } else if (data[i] === "i") {
      results++;
    } else if (data[i] === "o") {
      results++;
    } else if (data[i] === "u") {
      results++;
    } else if (data[i] === "ä") {
      results++;
    } else if (data[i] === "ö") {
      results++;
    } else if (data[i] === "ü") {
      results++;
    }
  }
  if (results < 2) {
    post = "das ";
  } else if (results === 2 || results === 3) {
    post = "die ";
  } else if (results > 3) {
    post = "der ";
  }
  return post + wort;
}

console.log(derDieDas("OOOpa"));

console.clear();

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the n (initially 0)
// d decrements the n
// s squares the n
// o outputs the n into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse(data) {
  rezultatas = 0;
  rezull = [];
  rez = "";
  re = "";
  for (i = 0; i < data.length; i++) {
    if (data[i] === "i") {
      rez++, rezultatas++;
    } else if (data[i] === "d") {
      rez++, rezultatas--;
    } else if (data[i] === "s") {
      rez++, (rezultatas **= 2);
    } else if (data[i] === "o") {
      rezull.push(rezultatas);
    }
  }
  return rezull;
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

console.log(parse("dooisodo"));
console.log(parse("iiisdoso"));

console.clear();

// function isInStrictMode() {
//   "use strict";
//   return `${isInStrictMode()}`
//   }

console.log(isInStrictMode(true));

function isInStrictMode(gad) {
  "use strict";
  function nested() {
    return gad === true ? true : false;
  }
  return nested();
}

console.log(isInStrictMode(false));

console.clear();

let humanYearsCatYearsDogYears = function (humanYears) {
  let human = 0;
  let dog = 0;
  let cat = 0;

  if (humanYears >= 1) {
    human = humanYears;
  }
  if (humanYears == 1) {
    dog = humanYears * 15;
  } else if (humanYears == 2) {
    dog = 15 + 9;
  } else if (humanYears > 2) {
    dog = 5 * (humanYears - 2) + 15 + 9;
  }

  if (humanYears == 1) {
    cat = humanYears * 15;
  } else if (humanYears == 2) {
    cat = 15 + 9;
  } else if (humanYears > 2) {
    cat = 4 * (humanYears - 2) + 15 + 9;
  }

  return [human, cat, dog];
};

console.log(humanYearsCatYearsDogYears(2));

console.clear();

function cupAndBalls(b, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == b) {
      b = arr[i][1];
    } else if (arr[i][1] == b) {
      b = arr[i][0];
    }
  }
  return b;
}

console.clear();

function strictEqual(b) {
  let answ = 0;
  if (b > 0) {
    answ = b * b;
  }
  return answ;
}

console.log(strictEqual(10));

// console.clear();

// // function race(v1, v2, g) {
// //   let time =
// // }

// console.clear();

// function SubtractSum(n){
//   let sum = 0;
//   let sap = 'cherry';
//   let gad = n;
//   let del = 0
//    while (del > 101) {
//     sum += gad % 10;
//     gad = Math.floor(n / 10);
//     del = gad - sum;
//   }
// if (del == 1 || del == 3 || del == 24 || del == 26 || del == 47 || del == 49 || del ==68 || del == 70 || del == 91 || del == 93) {sap = 'kiwi'}
// else if (del == 2 || del == 21 || del == 23 || del == 42 || del == 44 || del == 46 || del == 65 || del == 67 || del == 69 || del == 88) {sap = 'pear'}
// else if (del == 9 || del == 18 || del == 27 || del == 36 || del == 45 || del == 54 || del == 63 || del == 72 || del == 81 || del == 90) {sap = 'apple'}
// else if (del == 4 || del == 6 || del == 25 || del == 29 || del == 48 || del == 50 || del == 71 || del == 73 || del == 92 || del == 94 ) {sap = 'banana'}
// else if (del == 5 || del == 7 || del == 28 || del == 30 || del == 32 || del == 51 || del == 53 || del == 74 || del == 76 || del == 95 || del == 97) {sap = 'melon'}
// else if (del == 8 || del == 10 || del == 12 || del == 31 || del == 33 || del == 52 || del == 56 || del == 75 || del == 77 || del == 79 || del == 98 || del == 100) {sap = 'pineapple'}
// else if (del == 11 || del == 13 || del == 34 || del == 55 || del == 57 || del == 59 || del == 78 || del == 80 ) {sap = 'cucumber'}
// else if (del == 14 || del == 16 || del == 35 || del == 37 || del == 39 || del == 58 || del == 60 || del == 83 ) {sap = 'orange'}
// else if (del == 86 || del == 84 || del == 82 || del == 61 || del == 40 || del == 38 || del == 19 || del == 17 || del == 15) {sap = 'grape'}
// // else if {sap = 'cherry'}
// return del
// }

// console.log(SubtractSum(150))

function SubtractSum(n) {
  let sum = 0;
  let sap = "cherry";
  gad = n;
  let del = 0;
  while (gad) {
    sum += gad % 10;
    gad = Math.floor(gad / 10);
  }
  do {
    del = n - sum;
  } while (del > 101);
  {
  }
  if (
    del == 1 ||
    del == 3 ||
    del == 24 ||
    del == 26 ||
    del == 47 ||
    del == 49 ||
    del == 68 ||
    del == 70 ||
    del == 91 ||
    del == 93
  ) {
    sap = "kiwi";
  } else if (
    del == 2 ||
    del == 21 ||
    del == 23 ||
    del == 42 ||
    del == 44 ||
    del == 46 ||
    del == 65 ||
    del == 67 ||
    del == 69 ||
    del == 88
  ) {
    sap = "pear";
  } else if (
    del == 9 ||
    del == 18 ||
    del == 27 ||
    del == 36 ||
    del == 45 ||
    del == 54 ||
    del == 63 ||
    del == 72 ||
    del == 81 ||
    del == 90
  ) {
    sap = "apple";
  } else if (
    del == 4 ||
    del == 6 ||
    del == 25 ||
    del == 29 ||
    del == 48 ||
    del == 50 ||
    del == 71 ||
    del == 73 ||
    del == 92 ||
    del == 94
  ) {
    sap = "banana";
  } else if (
    del == 5 ||
    del == 7 ||
    del == 28 ||
    del == 30 ||
    del == 32 ||
    del == 51 ||
    del == 53 ||
    del == 74 ||
    del == 76 ||
    del == 95 ||
    del == 97
  ) {
    sap = "melon";
  } else if (
    del == 8 ||
    del == 10 ||
    del == 12 ||
    del == 31 ||
    del == 33 ||
    del == 52 ||
    del == 56 ||
    del == 75 ||
    del == 77 ||
    del == 79 ||
    del == 98 ||
    del == 100
  ) {
    sap = "pineapple";
  } else if (
    del == 11 ||
    del == 13 ||
    del == 34 ||
    del == 55 ||
    del == 57 ||
    del == 59 ||
    del == 78 ||
    del == 80
  ) {
    sap = "cucumber";
  } else if (
    del == 14 ||
    del == 16 ||
    del == 35 ||
    del == 37 ||
    del == 39 ||
    del == 58 ||
    del == 60 ||
    del == 83
  ) {
    sap = "orange";
  } else if (
    del == 86 ||
    del == 84 ||
    del == 82 ||
    del == 61 ||
    del == 40 ||
    del == 38 ||
    del == 19 ||
    del == 17 ||
    del == 15
  ) {
    sap = "grape";
  }
  // else if {sap = 'cherry'}
  return sap;
}

console.log(SubtractSum(44));

console.clear();

function dontGiveMeFive(start, end) {
  let penki = 0;
  let oplia = 0;
  let pp = 0;
  let stop = 0;
  let kadr = 0;
  let dif = 0;
  for (i = start; i <= end; i++) {
    if (i > 0) dif++;
    if (i % 5 == 1 && i % 10 != 1) penki++;
    // if (i == 5,15,25,35,45,65,75,85,95,105) (penki++);
    if ((i > 49 && i < 60) || (i > 499 && i < 600)) stop++;
    if (i == 55) {
      kadr = 1;
    }
  }
  oplia = Math.ceil(penki / 2);
  //  if (start < 2) {oplia = oplia - 1}
  pp = dif - penki - stop - kadr;

  return pp;
}

console.log(dontGiveMeFive(2, 615));

function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
      count++;
    }
  }
  return count;
}

console.log(dontGiveMeFive(2, 615));

console.clear();

function fourSeven(n) {
  let pot = 0;
  while (n == 4 || n == 7) {
    pot = 28 / n;

    return pot;
  }
  return 0 + pot;
}

console.log(fourSeven(4));
console.log(fourSeven(7));
console.log(fourSeven(52));

console.clear();

function betterThanAverage(classPoints, yourPoints) {
  let summa = 0;
  let classPointslength = 0;
  let vidurkis = 0;
  let oleg = "";
  if (Array.isArray()) {
    return false;
  }
  {
    for (let i = 0; i < classPoints.length; i++) summa += classPoints[i];
    summa = summa + yourPoints;
    classPointslength = classPoints.length + 1;
    vidurkis = summa / classPointslength;

    yourPoints >= vidurkis ? (oleg = true) : (oleg = false);
  }
  return oleg;
}

console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69));

console.clear();

function squareDigits(num) {
  let intArr = Array.from(String(num));
  let ret = [];
  let result = "";
  for (let i = 0, len = intArr.length; i < len; i++) {
    ret += intArr[i] * intArr[i];

    result = Number(ret);
  }

  return result;
}

console.log(squareDigits(32125));

console.clear();

function stray(numbers) {
  let karl = 0;
  let petr = numbers.length - 1;
  let ruzu = 0;
  for (let i = 0; i < numbers.length; i++) {
    karl += numbers[i];
    uniqueArray = Array.from(new Set(numbers));
    // uniqueArray = Array.from(karl);
  }
  // if (numbers.length =< 2) {ruzu = undefined}
  if (uniqueArray[0] * petr + uniqueArray[1] === karl) {
    ruzu = uniqueArray[1];
  } else {
    ruzu = uniqueArray[0];
  }
  return ruzu;
}

console.log(stray([0, 0, 0, -5, 0]));

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i][0] == b) {
//     b = arr[i][1];
//   } else if (arr[i][1] == b) {
//     b = arr[i][0];
//   }
// }
// return b;
// }

console.clear();

function maskify(cc) {
  let povel = "";
  let angr = "";
  let caple = "";
  let gabr = "";
  povel = cc.slice(0, -4);
  angr = cc.slice(-4);
  caple = povel.replaceAll(/[0123456789qwertyuiopasdfghjklzxcvbnm]/g, "#");
  gabr = caple.concat(angr);
  if (cc.length <= 4) {
    gabr = cc;
  }
  return gabr;
}

console.log(maskify("45616"));

console.clear();

function filter_list(l) {
 let bb = [];
 let aa = [];
 bb = l.filter(
  element => typeof element === 'number'
);
aa = bb.filter(el => el >= 0);
 return aa
}

console.log(filter_list([-5 ,1,'a','b','5',0,15]))

console.clear();

function shortcut (string) {
  let bot = '';
  bot = string.replaceAll(/[euioa]/g, "");
  return bot
}

console.log(shortcut('returning'))

console.clear();

 function summation (num) {
  let bolt = 0;
  // let gap = [];
  while (num > 0) {
  // gap += num 
  bolt += Number(num);
  num = num-1;
}
return bolt
}

console.log(summation(8));

