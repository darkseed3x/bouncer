'use strict';
// firstQuest();
//secondQuest();
//thirdQuest(); 

fourthAndFifthQuest();

function fourthAndFifthQuest() {

    let arr = new Array(9);
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    let iMax, iMin;
    let totalOddSum = 0;

    for (let index = 0; index < arr.length; index++) {
        arr[index] = Math.floor(Math.random() * 100) + 1;
        if (index % 2 !== 0) {
            totalOddSum += arr[index];
        }
        if (arr[index] > max) {
            max = arr[index];
            iMax = index;
        }
        if (arr[index] < min) {
            min = arr[index];
            iMin = index;
        }
    }

    alert(`Максимальный элемент ${max}
Минимальный элемент ${min}
Индекс макимального элементы ${iMax}
Индекс минимаьлного элемента ${iMin}
Сумма нечётных элементов = ${totalOddSum}`);
}

function thirdQuest() {

    let x, y;

    x = +prompt(`Введите x`);
    y = +prompt(`Введите y`);

    if (x > 0 && y > 0) {
        alert("Точка принадлежит первой четверти");
    } else if (x < 0 && y > 0) {
        alert("Точка принадлежит второй четверти");
    } else if (x < 0 && y < 0) {
        alert("Точка принадлежит третьей четверти");
    } else if (x > 0 && y < 0) {
        alert("Точка принадлежит третьей четверти");
    } else {
        alert("Точка лежит на оси коррдинат")
    }

}

function secondQuest() {

    let arr = new Array(3);
    let totalSum = 0;
    let totalMultipl = 1;

    for (let index = 0; index < arr.length; index++) {
        arr[index] = +prompt(`Введите ${index + 1} элемент`);
        totalSum += arr[index];
        totalMultipl *= arr[index];
    }

    if (totalSum > totalMultipl) {
        alert(totalSum + 3);
    } else {
        alert(totalMultipl + 3);
    }

}

function firstQuest() {

    let arr = new Array(3);
    let total = 0;

    for (let index = 0; index < arr.length; index++) {
        arr[index] = +prompt(`Введите ${index + 1} элемент`);
        if (arr[index] > 0) {
            total += arr[index];
        }
    }

    alert(total);
}
