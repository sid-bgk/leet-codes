
const monthMap = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04",
  May: "05", Jun: "06", Jul: "07", Aug: "08",
  Sep: "09", Oct: "10", Nov: "11", Dec: "12"
};

var reformatDate = function(date) {
  const [dayStr, monthStr, year] = date.split(" ");
  const day = dayStr.slice(0, -2).padStart(2, "0");
  return `${year}-${monthMap[monthStr]}-${day}`;
};

console.log(reformatDate("20th Oct 2052")) // 2052-10-20
console.log(reformatDate("6th Jun 1933"))  // 1933-06-06
console.log(reformatDate("26th May 1960")) // 1960-05-26
console.log(reformatDate("1st Jan 2000"))  // 2000-01-01
console.log(reformatDate("31st Dec 2099")) // 2099-12-31
console.log(reformatDate("2nd Feb 2020"))  // 2020-02-02
console.log(reformatDate("3rd Mar 1999"))  // 1999-03-03
console.log(reformatDate("4th Apr 2010"))  // 2010-04-04
console.log(reformatDate("11th Nov 1985")) // 1985-11-11
console.log(reformatDate("15th Aug 1947")) // 1947-08-15