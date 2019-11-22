'use strict';
// eleventh();
// twelfth();
// thirteenth();
// fourteenth();
fifteenth();

function fifteenth() {

    let array = fillArray(10);
    let swap = 0;
    console.log(array);

    //Insertion sort
    // for (let i = 0; i < array.length - 1; i++) {

    //     for (let j = i + 1; j > 0; j--) {

    //         if (array[j - 1] > array[j]) {

    //             swap = array[j];
    //             array[j] = array[j - 1];
    //             array[j - 1] = swap;

    //         } else {

    //             break;

    //         }
    //     }
    // }
    // console.log(array);

    // Selection sort
    for (let i = 0; i < array.length - 1; i++) {

        let min = i;

        for (let j = i + 1; j < array.length; j++) {

            if(array[j] < array[min]){

                min = j;
                
            }
        }

        swap = array[min];
        array[min] = array[i];
        array[i] = swap;

    }
    console.log(array);
}
function fourteenth() {

    let array = fillArray(10);
    let swap = 0;

    console.log(array);

    for (let i = 0; i < array.length; i++) {

        for (let j = array.length - 1; j >= i; j--) {

            if (array[j] < array[j - 1]) {

                swap = array[j];
                array[j] = array[j - 1];
                array[j - 1] = swap;
            }

        }

    }

    console.log(array);

}

function thirteenth() {

    let array = fillArray(5);
    let counter = (Math.round((array.length) / 2));

    console.log(array);

    while (counter !== 0) {
        array.push(array.shift(0));
        counter--;
    }
    //    let arraResult = array.slice(array.length/2).concat(array.slice(0,array.length/2));
    console.log(array);
}

function twelfth() {
    const readline = require('readline-sync');

    let lengthArr = +readline.question("Enter a length of array\n");
    let array = fillArray(lengthArr);
    let counter = 0;

    for (let index = 0; index < array.length; index++) {
        if (index % 2 !== 0) {
            counter++;
        }

    }
    console.log(counter);
}

function eleventh() {

    let array = fillArray(10);
    let arrayResult = new Array(fillArray().length);

    for (let k = 0, i = array.length - 1; i >= 0; i-- , k++) {
        arrayResult[k] = array[i];

    }
    console.log(array);
    console.log(arrayResult);
    // console.log(array);
    // console.log(array.reverse());
}

function fillArray(length) {

    let array = new Array(length);

    for (let index = 0; index < array.length; index++) {
        array[index] = Math.floor(Math.random() * 100) + 1;

    }
    return array;
}