

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // Задача №1
    "use strict";
    let x = [];
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d > 0) {
        x[0] = (-b + Math.sqrt(d)) / (2 * a);
        x[1] = (-b - Math.sqrt(d)) / (2 * a);
    } else if (d == 0) {
        x[0] = (-b + Math.sqrt(d)) / (2 * a);
    } else {
    }
    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // Задача №2
    if (marks.length > 5) {
        console.log("Оценок много. Берём первые пять");
        marks = marks.slice(0, 5);
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }
    let averageMark = sum / marks.length;
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // Задача №3
    let currentYear = new Date();
    let visitorAge = currentYear.getFullYear() - dateOfBirthday.getFullYear();
    let result;
    if (visitorAge < 18) {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } else {
        result = `Не желаете ли олд-фэшн, ${name}`;
    }
    console.log(result);
    return result;
}