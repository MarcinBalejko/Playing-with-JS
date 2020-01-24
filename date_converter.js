
let x = '2019-01-21T12:09:03Z'

function showTime(parameter) {
    const monthsArr = ["JAN", "FEB", "MAR", "APR",
        "MAY", "JUN", "JUL", "AUG", "SEPT",
        "OCT", "NOV", "DEC"
    ];

    let dateObj = new Date(parameter);

    let year = dateObj.getFullYear();
    let month = dateObj.getMonth();
    let numDay = dateObj.getDate();

    let output = monthsArr[month] + " " + numDay + ", " + year;

    return output;
}

console.log(showTime(x));