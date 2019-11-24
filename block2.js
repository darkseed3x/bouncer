'use strict';

// sixth();
// seventh();
// eighth();
// ninth();
tenth();
function tenth() {
    const readline = require('readline-sync');

    let number = readline.question("Enter a number\n");
    let result = '';

    for (let i = number.length - 1; i >= 0; i--) {

        result += number.charAt(i);

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

    let number = +readline.question("Enter a number\n");
    let isPrime = true;

    for (let i = 1; i < number; i++) {

        if (Math.pow(i, 2) < number && Math.pow(i + 1, 2) > number) {
            console.log(`${i} is sqrt of number(bruteforce)`)
        } else if (Math.pow(i, 2) === number) {
            console.log(`${i} is sqrt of number(bruteforce)`)
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

    let i = number;

    console.log(`${BinaryRoot(number)} is sqrt of number(Binary)`);

}
function BinaryRoot(digit) {
    let l = 0, p = 0, attempt = 0;
    let r = digit;


    while (true) {
        p = (l + r) / 2;
        attempt = p * p;

        if (Math.abs(digit - attempt) < 1)
            return Math.floor(p);
        else if (attempt > digit)
            r = p;
        else
            l = p;
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