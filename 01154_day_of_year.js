var dayOfYear = function(date) {
    const [year, month, day] = date.split('-').map(Number);

    const daysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let dayOfYear = day;
    for (let i = 0; i < month - 1; i++) {
        dayOfYear += daysInMonth[i];
    }

    return dayOfYear;
};

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(dayOfYear("2019-01-09")) // 9
console.log(dayOfYear("2019-02-10")) // 41
console.log(dayOfYear("2019-12-31")) // 365
console.log(dayOfYear("2016-02-29")) // 60
console.log(dayOfYear("2016-12-31")) // 366
console.log(dayOfYear("1900-03-01")) // 60
console.log(dayOfYear("2000-03-01")) // 61
console.log(dayOfYear("2019-01-01")) // 1
console.log(dayOfYear("2019-11-15")) // 319
console.log(dayOfYear("2012-07-04")) // 186
