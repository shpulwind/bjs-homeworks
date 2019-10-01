"use strict"

// Задача №1

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
    }

    takeDamage(damage) {
        if (damage < this.durability) {
            this.durability -= damage;
        } else if (damage >= this.durability) {
            return (this.durability = 0);
        }
    }

    getDamage() {
        if (this.durability >= (30 * this.durability) / 100) {
            return this.attack;
        } else if (this.durability == 0) {
            return 0;
        } else {
            return this.attack / 2;
        }
    }

    isBroken() {
        if (this.durability > 0) {
            return false;
        } else {
            return true;
        }
    }
}

// Проверяем 1 метод

const sword = new Weapon("Старый меч", 20, 10, 1);

sword.takeDamage(5);
console.log(sword.durability); // 5
sword.takeDamage(50);
console.log(sword.durability); // 0

const arm = new Weapon("Рука", 1, Infinity, 1);
  
arm.takeDamage(20);
console.log(arm.durability); // Infinity
  
const bow = new Weapon("Лук", 10, 200, 3);
  
bow.takeDamage(20);
console.log(bow.durability); // 180
  
bow.takeDamage(200);
console.log(bow.durability); // 0

// Проверяем 2 метод

console.log(bow.durability); // 0
console.log(bow.getDamage()); // 10

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1

// Проверяем 3 метод

console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false

console.log(sword.durability); // 0
console.log(sword.isBroken()); // true

// 1 таблица

const armTwo = new Weapon({
    name: "Рука",
    attack: 1,
    durability: Infinity,
    range: 1
});

const bowTwo = new Weapon({
    name: "Лук",
    attack: 10,
    durability: 200,
    range: 3
});

const swordTwo = new Weapon({
    name: "Меч",
    attack: 10,
    durability: 200,
    range: 3
});

const knife = new Weapon({
    name: "Нож",
    attack: 5,
    durability: 300,
    range: 1
});

const staff = new Weapon({
    name: "Посох",
    attack: 8,
    durability: 300,
    range: 20
});

// 2 таблица

const longBow = new Weapon({
    name: "Длинный лук",
    versionOfWhat: "Лук",
    attack: 15,
    durability: 200,
    range: 4
});

const axe = new Weapon({
    name: "Секира",
    versionOfWhat: "Меч",
    attack: 27,
    durability: 800,
    range: 3
});

const stormStaff = new Weapon({
    name: "Посох бури",
    versionOfWhat: "Посох",
    attack: 10,
    durability: 300,
    range: 3
});

// Задача №2

class Bow extends Weapon {
    constructor() {
        super();
        this.name = "Лук";
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
    }
}

class Arm extends Weapon {
    constructor() {
        super();
        this.name = "Рука";
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1;
    }
}

class Sword extends Weapon {
    constructor() {
        super();
        this.name = "Меч";
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
    }
}

class Knife extends Weapon {
    constructor() {
        super();
        this.name = "Нож";
        this.attack = 5;
        this.durability = 300;
        this.range = 1;
    }
}

class Staff extends Weapon {
    constructor() {
        super();
        this.name = "Посох";
        this.attack = 8;
        this.durability = 300;
        this.range = 20;
    }
}

class LongBow extends Bow {
    constructor() {
        super();
        this.name = "Длинный лук";
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super();
        this.name = "Cекира";
        this.attack = 27;
        this.durability = 800;
    }
}

class StormStaff extends Staff {
    constructor() {
        super();
        this.name = "Посох бури";
        this.attack = 10;
        this.range = 3;
    }
}

// Проверяем

const long = new LongBow();

long.takeDamage(5);
console.log(long.durability); // 195

long.takeDamage(500);
console.log(long.durability);  // 0

console.log(long.getDamage()); // 15

console.log(long.isBroken()); // true

// Задача №3

class StudentLog {
	constructor(name) {
		this.name = name;
		this.grades = {};
	}

	getName() {
		return this.name;
	}

	addGrade(grade, subject) {
		if(Number.isInteger(grade) && grade > 0 && grade < 6){
			if(typeof this.grades[subject] === "undefined") {
				this.grades[subject] = [grade];
			} else {
				this.grades[subject].push(grade);
			}
		} else {
			let result = `Вы пытались поставить оценку ${grade} по предмету "${subject}". Допускаются только числа от 1 до 5`;
			if(typeof this.grades[subject] === "undefined") {
				result += "\n0";
			} else {
				result += "\n" + this.grades[subject].length;
			}
			return result;
		}

		if(typeof this.grades[subject] === "undefined") {
			return 0;
		} else {
			return this.grades[subject].length;
		}
	}

	getAverageBySubject(subject) {
		if(typeof this.grades[subject] === "undefined"){
			return 0;
		} else {
			let sum = 0;
		    for(let mark of this.grades[subject]) {
		    	sum += Number(mark);
		    }
		    let avg = sum / this.grades[subject].length;
		    return avg;
		}
	}

	getTotalAverage() {
		let sum = 0;
		for(let grade in this.grades) {
			sum += Number(this.getAverageBySubject(grade));
		}
		let avg = sum / Object.keys(this.grades).length;
		return avg;
	}
}
