// 1. 
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, c, ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]


// 2. 
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26


// 3. -
// function mul() {
//     var tmp = 1;
//     var count = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         if (typeof (arguments[i]) === "number") {
//             tmp *= arguments[i];
//             count++;
//         }
//     }
//     if (count == 0) return 0;
//     return tmp;
// };
function mul(...params){
    let res = 0;
    for (let i = 0; i < params.length; i++) {
        if (typeof params[i] === 'number'){
            res += params[i];
        }
    }
    return res;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0



// 4. 

// let server = {
//     data: 0,
//     convertToString: function (callback) {
//         callback((function () {
//             return this.data + "";
//         }).bind(this));
//     }
// };
// let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//         this.server.data = data;
//         this.server.convertToString(this.notification());
//     },
//     notification: function () {
//         return (function (callback) {
//             this.result = callback();
//         }).bind(this);
//     }
// };

let server = {
    data: 0,
    convertToString: function (callback) {
       callback(( () => {
          return this.data + "";
       }));
    }
 };
 let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function () {
       return ( (callback) => {
          this.result = callback();
       });
    }
 };
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"


// 5. 
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
function mapBuilder() {
    const map = new Map();
    for(let i = 0; i < keys.length; i++){
       map.set(keys[i], values[i]);
    };
    return map;
 };
console.log(map.size); // 4
console.log(map.get(2)); // "span"