'use strict';

// sixth();
seventh();
// eighth();
// ninth();
// tenth();
function tenth() {
    const readline = require('readline-sync');

    let number = +readline.question("Enter a number\n");
    let result = '';

    while (number !== 0) {
        result += number % 10;
        number = Math.floor(number / 10);

    }
    console.log(result);
}

function ninth() {
    const readline = require('readline-sync');

    let number = +readline.question("Enter a number\n");
    let result = 0;

    while (number !== 0) {
        result += number % 10;
        number = Math.floor(number / 10);

    }
    console.log(result);

}
function eighth() {

    let result = 1;
    const readline = require('readline-sync');

    let number = +readline.question("Enter a number\n");

    for (let index = 1; index <= number; index++) {
        result *= index;

    }
    console.log(result);
}

function seventh() {
    const readline = require('readline-sync');

    let number = 25;/*+readline.question("Enter a number\n");*/
    let isPrime = true;

    for (let i = 1; i < number; i++) {

        if (Math.pow(i, 2) < number && Math.pow(i + 1, 2) > number) {
            console.log(`${i} is sqrt of number`)
        } else if (Math.pow(i, 2) === number) {
            console.log(` ${i} is sqrt of number`)
        }

        if (i === 1) {
            continue;
        }

        if (number % i === 0) {
            isPrime = false;

        }
    }
    if (isPrime) {
        console.log(`number ${number} is prime`)
    } else {
        console.log(`number ${number} is not prime`)
    }
    console.log(BinaryRoot(number));
    function BinaryRoot(number){
        let i = number;
        do{
            i = Math.floor(i/2);
            if(Math.pow(i, 2) < number){
                i++;
            }
        }while(Math.pow(i, 2) === number);
        return i;

    }

}

function sixth() {
    let amount = 0;
    let totalSum = 0;

    for (let i = 2; i < 100; i += 2) {
        totalSum += i;
        amount++;

    }
    console.log(`сумма ${totalSum}
количество ${amount}`);
}