"use strict"

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

// Задача №1
function calculateTotalMortgage(percent, contribution, amount, date) {
    for (let i = 0; i < 3; i++) {
        if ((typeof arguments[i] != "number"
        && typeof Number(arguments[i]) != "number")
        || isNaN(Number(arguments[i]))) {
            let argumentName;
            switch (i) {
                case 0:
                    argumentName = "Процентная ставка";
                    break;
                case 1:
                    argumentName = "Начальный взнос";
                    break;
                case 2:
                    argumentName = "Общая стоимость";
                    break;
            }
            return `Параметр \"${argumentName}\" содержит неправильное значение \"${arguments[i]}\"`;
        }
    }

    percent /= 100;
    let p = percent / 12;
    let nowDate = new Date();
    let fullTimeMortgage = Math.round((Date.parse(date) - Date.parse(nowDate)) / 1000 / 60 / 60 / 24 / 30);
    let creditSum = amount - contribution;
    let monthlyPayment = creditSum * (p + p / ((1 + p) ** fullTimeMortgage - 1));
    let totalAmount = monthlyPayment * fullTimeMortgage;
    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

// Задача №2
function getGreeting(name) {
    if (isNaN(name)) {
        return `Привет, мир! Меня зовут ${name}`;
      } else {
        return `Привет, мир! Меня зовут Аноним`;
    }
}