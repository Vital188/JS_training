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


function kablelis(dog) {

const alsymbols = ".";

let samm = 0;

if (alsymbols.indexOf(Symbol) >=0) {samm++}

return samm;
}
console.log(kablelis('...'));
