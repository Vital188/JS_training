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



