const leapYears = function (year) {
  const leapYear1 = year % 4 === 0;
  const leapYear2 = year % 400 === 0;
  const not_a_leapYear = (year) => {
      let years= "";
      switch(years){
      case 0:
          year : leapYear1;
          break;
      case 1:
          year: leapYear2;
          break;
     default:
        year: not_a_leapYear;
        return year;
      }
  }
  

  if (
    leapYear1 || leapYear2 || !not_a_leapYear)
    {
    return true;
  } else {
    return false;
  }
};
leapYears();
console.log(leapYears(1984));
console.log(leapYears(1800));
console.log(leapYears(1900));
console.log(leapYears(2025));


// Do not edit below this line
module.exports = leapYears;
