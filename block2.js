'use strict';

// sixth();
// seventh();
// eighth();
// ninth();
// tenth();
function tenth(){
    const readline = require('readline-sync');

    let number = +readline.question("Enter a number\n");
    let result = '';

    while(number !== 0){
        result += number % 10;
        number = Math.floor( number / 10);

    }
    console.log(result);
}

function ninth(){
    const readline = require('readline-sync');

    let number = +readline.question("Enter a number\n");
    let result = 0;

    while(number !== 0){
        result += number % 10;
        number = Math.floor( number / 10);

    }
    console.log(result);

}
function eighth(){

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
    let primeNumber = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            primeNumber = false;
            console.log(`number ${number} is not prime`)
            return;
        }
    }
    console.log(`number ${number} is prime`)
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