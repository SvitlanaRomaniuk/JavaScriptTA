// 1. the product of the elements of this array
let array = [2, 3, 4, 5];
let total = 1
for (let i = 0; i < array.length; i++) { 
    total *= array[i];
}
console.log(`The product is: ${total}`);


// 2.the current number is even or odd
for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
      alert( `${i} is even` );
    } 
    else {
        alert(`${i} is odd`)
    } 
}

// 3. 
function randArray(k) {
 return Array.from({ length: k }, () => Math.floor(Math.random() * 500));
}
const k = 5
console.log(randArray(k));

// 4.
function raiseToDegree(a, b) {
    const exponentiation = (Math.pow(a, b));
    return exponentiation
}

const a = parseInt(prompt('Enter base: '));
const b = parseInt(prompt('Enter exponent: '));
alert(raiseToDegree(a, b));

// 5. 
function findMin() {
    return Math.min(...arguments)
}
console.log(findMin(-3, 1, 4, 1, 5, -25));

// 6.
// const arr1 = [1, 2, 3, 5, 3];
// const arr2 = [1, 2, 3, 5, 11];

// function findUnique(arr) {
//   if (arr.length == new Set(arr).size) {
//     return true
//   }
//   return false
// }
// console.log(findUnique(arr1));
// console.log(findUnique(arr2)); 

const arr1 = [1, 2, 3, 5, 3];
const arr2 = [1, 2, 3, 5, 11];

function findUnique(arr) {
    let tmp = [];
    for (let i = 0; i < arr.length; i++) {
        if (tmp.indexOf(arr[i]) === -1) {
            tmp.push(arr[i]);
        }
    }

    return arr.length === tmp.length
}

console.log(findUnique(arr1));
console.log(findUnique(arr2));

// 7.
function lastElem(arr, count) {
    if(!count){
        count = 1;
    }
    else if(count < 0){
        throw new Error('Invalid count');
    }
    else if (arr.length < count) {
        return arr;
    } 
    return arr.slice(count * -1);
  }

console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5], 2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8));   // [3, 4, 10, -5]

// 8.
const str = 'i love java script'

function UpperCase(str) {
    if(!str){
        return str;
    }
    let result = str[0].toUpperCase();  
    for (var i = 1; i <= str.length - 1; i++) {  
        let currentCharacter,  
            previousCharacter = str[i - 1];  
        if (previousCharacter && previousCharacter == ' ') {  
            currentCharacter = str[i].toUpperCase();  
        } else {  
            currentCharacter = str[i];  
        }  

        result = result + currentCharacter;
    }  
    return result;  
}

console.log(UpperCase(str));

