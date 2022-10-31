
let today = new Date()
let curHr = today.getHours()
function message(){
if (curHr < 12) {
    return('Good morning')
} else if (curHr < 18) {
    return('Good afternoon')
} else {
    return('Good evening')
}
};
module.exports = message;

