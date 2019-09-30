"use strict"

// Задача №1
function getSolutions(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        let rootsAndD = {D: d};
        return rootsAndD;
    } else if (d == 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let rootsAndD = {roots: [x1], D: d};
        return rootsAndD;
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        let rootsAndD = {roots: [x1, x2], D: d};
        return rootsAndD;
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

// Задача №2
function getAverageScore(data) {
    let averageMark = {};
    for (let prop in data) {
        let sum = 0;
        for (let i = 0; i < data[prop].length; i++) {
            sum += data[prop][i];
        }
        averageMark[prop] = sum / data[prop].length;
    }
    return averageMark;
}

function getAverageMark(data) {
    let averageScores = getAverageScore(data);
    let sum = 0;
    for (let prop in averageScores) {
        sum += averageScores[prop];
    }
    let average = sum / Object.keys(averageScores).length;
    averageScores.average = average;
    return averageScores;
}

console.log( getAverageMark({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemestry: [2],
    french: [4, 4]
}));

// Задача №3
function getPersonData(secretData) {
    let name = getPirateName(secretData);
    let pirate = {};    
    if (name[0] === 0) {
      pirate.firstName = "Родриго";
    } else if (name[0] === 1) {
      pirate.firstName = "Эмильо";
    }  
    if (name[1] === 0) {
      pirate.lastName = "Родриго";
    } else if (name[1] === 1) {
      pirate.lastName = "Эмильо";
    }  
    return pirate;
  }
  
  function getPirateName(secretData) {
    let person = [];
    for (let prop in secretData) {
      person.push(secretData[prop]);
    }  
    return person;
  }
  
  console.log(getPersonData({
    aaa: 0,
    bbb: 0
  }));

  console.log(getPersonData({
    aaa: 1,
    bbb: 0
  }));

  console.log(getPersonData({
    aaa: 0,
    bbb: 1
  }));

  console.log(getPersonData({
    aaa: 1,
    bbb: 1
  }));