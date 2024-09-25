// задание 1

let salaries = {
    John: 100,
    Ann: 160,
    Pate: 130
}

function sumSalaries(salaries) {
    let sum = 0;
    
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum;
}

console.log('Сумма зарплат равна: ' +  sumSalaries(salaries) ); 



// задание 2

function multiplyNumeric(obj) {
    for (let bazm in obj) {
    if (typeof obj[bazm] == 'number') {
        obj[bazm] *= 2;
    }
    }
    return JSON.stringify(obj);
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

console.log(menu);
console.log(multiplyNumeric(menu));


задание 3

let calculator = {
    read() {
        this.a = +prompt('Введите первое число', 0);
        this.b = +prompt('Введите второе число', 0);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
      return this.a * this.b;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


// задание 4

let price = '$120';

function extractCurrencyValue(str) {
    return +str.replace(/[^0-9.-]+/g, "");
}

console.log(extractCurrencyValue(price));


// задание 5

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [
    vasya,
    petya,
    masha
];

let names = users.map(user => user.name);
console.log(names);


// задание 6 
function getAverageAge(users) {
    let totalAge = 0;

    for (let i = 0; i < users.length; i++) {
        totalAge += users[i].age;
    }

    return totalAge / users.length;
}

alert(getAverageAge(users));