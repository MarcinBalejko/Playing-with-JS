let x = '2019-01-21T12:09:03Z'

function showTime(parameter) {
    const monthsArr = ["Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug", "Sept",
        "Oct", "Nov", "Dec"
    ];

    let dateObj = new Date(parameter);

    let year = dateObj.getFullYear();
    let month = dateObj.getMonth();
    let numDay = dateObj.getDate();

    let output = monthsArr[month] + " " + numDay + ", " + year;

    return output;
}

console.log(showTime(x));