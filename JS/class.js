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