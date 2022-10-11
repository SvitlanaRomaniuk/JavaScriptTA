// 1. 
function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
    a: true
};
console.log(propsCount(mentor));

// 2.
function showProps(obj) {
    //return [...Object.keys(obj),  ...Object.values(obj)];
    console.log(Object.keys(obj));
    console.log(Object.values(obj));

}

const car = {
    model: 'Tesla Model X',
    price: 88500,
    electric: true,
    gasoline: undefined,
    color: null
};
showProps(car);

// 3. 
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return `${this.name} ${this.surname}`;
    }
};
class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        return super.showFullName() + ' ' + midleName;
    }
    showCourse() {
        var currentTime = new Date()
        let currentYear = currentTime.getFullYear()
        return currentYear - this.year
    }
};

const stud1 = new Student("Petro", "Petrenko", 2018);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse());

// 4.
class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    #getSalary() {
        return this.dayRate * this.workingDays;
    }

    showSalary() {
        console.log(this.#getSalary());
    }

    showSalaryWithExperience() {
        console.log(this.getSalaryWithExperience());
    }
    get getExperience() {
        return this.#experience;
    }
    set setExperience(value) {
        this.#experience = value;
    }
    getSalaryWithExperience() {
        return this.#getSalary() * this.#experience;;
    }

};

let workers = [
    new Worker("John Johnson", 20, 23),
    new Worker("Tom Tomson", 48, 22),
    new Worker("Andy Ander", 29, 23)
];
for (let i = 0; i < workers.length; i++) {
    let worker = workers[i];
    console.log(worker.fullName);
    worker.showSalary();
    console.log("New experience: " + worker.getExperience);
    worker.showSalaryWithExperience();
    worker.setExperience = parseFloat((Math.random() * (worker.getExperience - 2) + 2).toFixed(1));
    console.log("New experience: " + worker.getExperience);
    worker.showSalaryWithExperience();
};

console.log("----------------------------------------------------------------------");
let sortedWorkers = workers.sort((a, b) => a.getExperience - b.getExperience);
for (let i = 0; i < sortedWorkers.length; i++) {
    console.log(`worker_${sortedWorkers[i].fullName}: ${sortedWorkers[i].getSalaryWithExperience()} `);
};



// 5.
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    };
}
class Triangle extends GeometricFigure {
    constructor(h, a) {
        super();
        this.h = h;
        this.a = a;
    }
    getArea() {
        return 0.5 * this.h * this.a;
    };
}
class Square extends GeometricFigure {
    constructor(b) {
        super();
        this.b = b;
    }
    getArea() {
        return Math.pow(this.b, 2);
    }
}
class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }
    getArea() {
        return (Math.PI * Math.pow(this.r, 2));
    }
}

function handleFigures(figures) {
    let result = "";
    let totalArea = 0;
    for (let i = 0; i < figures.length; i++) {
        result += "Geometric figure:  " + figures[i].toString() + " area: " + figures[i].getArea() + "\n"
        totalArea += figures[i].getArea()
    }
    result += "Total Area:" + totalArea;
    return result;

}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));


