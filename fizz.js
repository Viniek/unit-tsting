function fizz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzBuzz';
    } else if (num % 3 === 0) {
        return 'fizz';
    } else if (num % 5 === 0) {
        return 'buzz';
    } else {
        return num;
    }
}

module.exports = fizz;
