
// 1. 
function upperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("String's not starts with uppercase character");
    }
    else {
        console.log("String's starts with uppercase character");
    }
};
upperCase('regexp');
upperCase('RegExp');


// 2. 
function checkEmail(data) {
    const regexp = /\S+2\S+\.\S+/;
    console.log(regexp.test(data));
}
checkEmail('Qmail2@gmail.com');


// 3.
const myRe = /d(b+)(d)/i;
const myArray = myRe.exec("cdbBdbsbz");
console.log(myArray);

// 4. 
const re = /(\w+)\s(w+)/;
const str = "Java Script";
const newstr = str.replace(re, "$2, $1");
console.log(newstr);

// 5.
function checkBankCard(str) {
    const RegExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    const result = RegExp.test(str);
    if (result) {
        console.log("Validation successful");
    } else {
        console.log("Please enter a bank card number!");
    };
};
checkBankCard("1234-5678-9012-1234");
checkBankCard("12q1-5678-9012-1234");
checkBankCard("12334-5678-9012-1234");

// 6.
function checkEmail(str) {
    const mailPattern = /^[a-zA-Z0-9]+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (mailPattern.test(str)) {
        console.log("Email is correct!");
    }
    else {
        console.log("Email is not correct!");
    }
}
checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');


// 7.
function checkLogin(data) {
    const re = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
    const reqNumber = /[0-9\.]+/g;
    const resultNumber = data.match(reqNumber);
    const result = re.test(data);
    console.log(`${data} is ${result} - ${resultNumber}`);
}
checkLogin('e1.88ret3');
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');