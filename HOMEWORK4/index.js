// 1.
function calcRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw "Parameter is not a number";
    }
    return width * height;
}
try {
    calcRectangleArea(10, "A");
} catch (error) {
    console.log(error);
}

// 2.
function checkAge() {
    const age = prompt('Could you please enter your age:');

    try {
        if (!age) {
            throw "The field is empty! Please enter your age";
        }

        if (isNaN(age)) {
            throw "The field is not number! Please enter your age";
        }

        if (age < 14) {
            throw "You is very young";
        }
        console.log("The access granted");

    } catch (error) {

        console.log(error);
        console.log("The access denied");
    };
}
checkAge();

// 3.
class MonthException {
    constructor(message) {
        this.message = message
        this.name = "MonthException";
    }
};
function showMonthName(month) {
    month -= 1
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[month] !== undefined) {
        return months[month];
    } else {
        throw new MonthException('Incorrect month number');
    }
}

try {
    const myMonth = 14;
    console.log(showMonthName(myMonth));
} catch (error) {
    console.error(error.name, error.message);
}


// 4.
function showUser(id) {
    const users = [
        {
            "id": 10,
            "name": "Hooper Henry"
        },
        {
            "id": 11,
            "name": "Mclean Leblanc"
        },
        {
            "id": 12,
            "name": "Monica Newton"
        }
    ];
    if (id < 0) {
        throw `ID must not be negative: ${id}`;
    }
    let user = users.filter(user => user.id === id);
    if (user.length === 0) {
        throw `User with id ${id} is not found`;
    }
    return user[0];
}

function showUsers(ids){
    let result = [];
    for (let i = 0; i < ids.length; i++) {
        try {
            result.push(showUser(ids[i]));
        } catch (error) {
            console.error(error);
        }
    }
    return result;
}


const newIds = [10, -1, 2];
console.log(showUsers(newIds));
