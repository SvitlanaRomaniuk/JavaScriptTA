// 1. Username outputs in a pop-up window
alert('Svitlana');

// 2. Last name is displayed in console
console.log('Romaniuk');

// 3. variables
let a, b;
a = 10;
b = 20;
console.log(a,b)
alert(`${a}, ${b}`)
a = b;
console.log(a, b)
alert(`${a}, ${b}`)

// 4. Object 
const car = {
    model: 'Tesla Model X',
    price: 88500,
    electric: true,
    gasoline: undefined,
    color:null  
};
console.log('car: ', car);

//5. 
let isAdult = confirm("Are you already 18 years old?")
console.log('User is adult: ' +  isAdult)

//6. 
let firstName, lastName, group, yearBithday;
firstName = 'Svitlana';
lastName = 'Romaniuk';
group = 1;
yearBithday = 1992;
let married;
married = true;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof group);
console.log(typeof yearBithday);
console.log(group, yearBithday, married, firstName, lastName);

let sex, age;
sex = null;
console.log(typeof sex, typeof age);



//7.
let login = prompt('Could you please enter your login', '');
let email = prompt('Could you please enter your email', '');
let password = prompt('Could you please enter your password', '');
//alert('Dear ' + login + ', your email is ' + email +', your password is ' + password);
alert(`Dear ${login}, your email is ${email}, your password is ${password}`);

//8.
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInMonth = 31;

let secondsInHour = secondsInMinute * minutesInHour;
let secondsInDay = secondsInMinute * minutesInHour * hoursInDay;
let secondsInMonth = secondsInMinute * minutesInHour * hoursInDay * daysInMonth;
alert(`Кількість секунд в годині: ${secondsInHour}, кількість секунд в добі: ${secondsInDay}, кількість секунд в місяці, де ${daysInMonth} календарних днів: ${secondsInMonth}`);