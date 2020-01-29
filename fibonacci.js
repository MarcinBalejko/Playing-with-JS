const fibonacci = function (num) {
    if (num < 2) {
        return num
    } else {
        fibonacci(num - 1) + fibonacci(num - 2)
    }
}

console.log(fibonacci(8));