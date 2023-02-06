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