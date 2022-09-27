// 1. Change code
let x = 1;
let y = 2;
let dataX = String(x);
let dataY = String(y);

let res1 = dataX + dataY;
console.log(res1); // "12"
console.log(typeof res1); // "string"

let booleanX = Boolean(dataX);
let res2 = booleanX + dataY; 
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x = !!y;
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseInt(x);
console.log(res4); // NaN
console.log(typeof res4); // "number"

// 2.
const number = prompt('Enter a number: '); 
const multiple = 7;
let result = `Число ${number}`;
if(number % 2 == 0 ){
    result += ', є парним';
} 
if(number > 0){
    result += ', є додатнім';
}  
if(number < 0){
    result += ', є відємним';
}  
if(number % multiple == 0){
    result += `, є кратним ${multiple}`; 
}
console.log(result);

// 3. 
const array = [];
array[0] = 77;
array[1] = 'Test';
array[2] = true;
array[3] = null;
const length = array.length
alert(`Довжина масиву: ${length}`);
let value = prompt('Enter some value: ');
array[4] = value;

alert(`П'ятий елемент масиву: ${value}`);
alert(`Перший елемент масиву: ${array[0]}   Масив: ${array}`);

console.log(array)

// 4. 
let cities = ["Rome", "Lviv", "Warsaw"]; 
console.log(cities.join('*'));
console.log(array.join('*'));

// 5. 
let isAdult = confirm("Are you already 18 years old?");
let message = 'You are';
if(isAdult == true ){
    message += ' of legal age';
} 
if(isAdult == false){
    message += ' still too young';
}
alert(message);

// 6. Program to find the area of a triangle




const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);

const areaFix = parseFloat(areaValue.toFixed(3));

console.log(`The area of the triangle is ${areaFix}`);

const isRightTriangle = (side1, side2, side3) => {
    const con1 = (side1*side1) === (side2*side2) + (side3*side3);
    const con2 = (side2*side2) === (side1*side1) + (side3*side3);
    const con3 = (side3*side3) === (side1*side1) + (side2*side2);
    return con1 || con2 || con3;
 };
 //console.log(isRightTriangle(side1, side2, side3));
 
 if (isRightTriangle(side1, side2, side3)){
    console.log('The triangle is right-angled')
 }
 else {
    console.log('The triangle is not right-angled')
 }


// 7. 
let date = new Date();
let time = date.getHours();
let messageNight = 'Доброї ночі';
let messageMorning = 'Доброго ранку';
let messageDay = 'Доброго дня';
let messageEvening = 'Доброго вечора';
if((time == 23) || (time == 0) || (time == 1) || (time == 2) || (time == 3) || (time == 4) || (time == 5)){
    alert(messageNight);
} 
if((time == 6) || (time == 7) || (time == 8) || (time == 9) || (time == 10) || (time == 11)){
    alert(messageMorning);
}  
if((time == 11) || (time == 12) || (time == 13) || (time == 14) || (time == 15) || (time == 16) || (time == 17)){
    alert(messageDay);
}  
if((time == 17) || (time == 18) || (time == 19) || (time == 20) || (time == 21) || (time == 22) || (time == 23)){
    alert(messageNight); 
}

switch(time){
    case 23:
        console.log(messageNight);
        break;
    case 0:
        console.log(messageNight);
        break;
    case 1:
        console.log(messageNight);
        break;
    case 2:
        console.log(messageNight);
        break;
    case 3:
        console.log(messageNight);
        break;
    case 4:
        console.log(messageNight);
        break;    
    case 5:
        console.log(messageMorning);
        break;
    case 6:
        console.log(messageMorning);
        break;
    case 7:
        console.log(messageMorning);
        break;  
    case 8:
        console.log(messageMorning);
        break;
    case 9:
        console.log(messageMorning);
        break;
    case 10:
        console.log(messageMorning);
        break;   
    case 11:
        console.log(messageDay);
        break;
    case 12:
        console.log(messageDay);
        break;
    case 13:
        console.log(messageDay);
        break;   
    case 14:
        console.log(messageDay);
        break;
    case 15:
        console.log(messageDay);
        break;
    case 16:
        console.log(messageDay);
        break;   
    case 17:
        console.log(messageEvening);
        break;
    case 18:
        console.log(messageEvening);
        break;
    case 19:
        console.log(messageEvening);
        break;    
    case 20:
        console.log(messageEvening);
        break;
    case 21:
        console.log(messageEvening);
        break;
    case 22:
        console.log(messageEvening);
        break;    
}
console.log(time);
