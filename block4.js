// console.log(sixteenth(4,5));
// seventeenth();
// eightteenth();










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
