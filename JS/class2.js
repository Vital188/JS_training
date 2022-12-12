// class Branch
// {
//     List<Branch> branches;
// }

function stray(numbers) {
    let b = numbers.find(element => element.lenght === 1);
    return b;
  }

console.log(stray([5,6,5,5]));

// const ages = [5,6,5,5]
// const uniqueAges = new Set(ages)

// console.log(uniqueAges);

// Array.prototype.unique = function() {
//     let arr = [];
//     for(let i = 0; i < this.length; i++) {
//         if(!arr.includes(this[i])) {
//             arr.push(this[i]);
//         }
//     }
//     return arr; 
//   }
  
//   const age = [26, 27, 26, 26, 28, 28, 29, 29, 30]
//   const uniqueAge = ages.unique()
//   console.log(uniqueAge)


const myArray = [1,2,3,1,5,8,1,2,9,4] {
const unique = [...new Set(myArray)];
return myArray}
console.log(unique);