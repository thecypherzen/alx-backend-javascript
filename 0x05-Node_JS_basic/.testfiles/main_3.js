const countStudents = require('./3-read_file_async');

/* Test Error thrown
countStudents("nope.csv")
    .then(() => {
        console.log("Done!");
    })
    .catch((error) => {
        console.log(error);
    });
*/

/* test expected result */
countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
        .catch((error) => {
        console.log(error);
    });
console.log("After!");
