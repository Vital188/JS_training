console.clear();

class Car {
    constructor (pavadi, spalva) {
        this.name = pavadi;
        this.age = 10;
        this.spalva = spalva;
    }

    introduce () {
        return `Im ${this.name} the besT car`;
    }

}


const BMW = new Car('BMW', "juoda");
const WV = new Car('WV', "melyna");
BMW.age = 12;

console.log(BMW);
console.log(WV);

console.clear();

function paperwork(n, m) {
if ( n < 0 || m < 0)
{return 0;}

return n * m;}
    
console.log(paperwork(5, 5));
console.log(paperwork(-5, 5));

