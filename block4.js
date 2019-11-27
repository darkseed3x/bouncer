// console.log(sixteenth(4,5));
// seventeenth();
// eightteenth();
// nineteenth();
function nineteenth() {

    let columns = 4, rows = 3;
    let matrix = new Array();
    let s = 1;

    for (let i = 0; i < rows; i++) {

        matrix[i] = new Array();

        for (let j = 0; j < columns; j++) {

            matrix[i][j] = 0;

        }
    }

    console.log(matrix);

    for (let y = 0; y < columns; y++) {
        matrix[0][y] = s;
        s++;
    }
    for (let x = 1; x < rows; x++) {
        matrix[x][columns - 1] = s;
        s++;
    }
    for (let y = columns - 2; y >= 0; y--) {
        matrix[rows - 1][y] = s;
        s++;
    }
    for (let x = rows - 2; x > 0; x--) {
        matrix[x][0] = s;
        s++;
    }

    let c = 1;
    let d = 1;

    while (s < (rows * columns)) {

        while (matrix[c][d + 1] === 0) {
            matrix[c][d] = s;
            s++;
            d++;
        }
        while (matrix[c + 1][d] === 0) {
            matrix[c][d] = s;
            s++;
            c++;
        }
        while (matrix[c][d - 1] === 0) {
            matrix[c][d] = s;
            s++;
            d--;
        }
        while (matrix[c - 1][d] === 0) {
            matrix[c][d] = s;
            s++;
            c--;
        }
    }
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y] === 0) {
                matrix[x][y] = s;
            }
        }
    }

    console.log(matrix);
}

function eightteenth() {
    let matrix = sixteenth(5, 5);
    let swap = 0;

    console.log(matrix);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[i].length; j++) {


            swap = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = swap
        }

    }
    console.log(matrix);
}

function seventeenth() {
    let matrix = sixteenth(5, 5);
    let counter = 0;

    console.log(matrix);
    for (let i = 1; i < matrix.length - 1; i++) {
        for (let j = 1; j < matrix[i].length - 1; j++) {
            if (matrix[i][j] > matrix[i - 1][j] &&
                matrix[i][j] > matrix[i + 1][j] &&
                matrix[i][j] > matrix[i][j - 1] &&
                matrix[i][j] > matrix[i][j + 1]) {
                counter++;
            }

        }

    }
    console.log(counter);
}

function sixteenth(rows, columns) {

    let arr = new Array();

    for (let i = 0; i < rows; i++) {

        arr[i] = new Array();

        for (let j = 0; j < columns; j++) {

            arr[i][j] = Math.floor(Math.random() * 100) + 1;

        }
    }
    return arr;
}
