let savings = 200;
let savingsToTwoDecimals = savings.toFixed(2);
let interestRatePercentage = 2;

let yearsToDouble = (72 / interestRatePercentage);
let yearsToDoubleToOneDecimal = yearsToDouble.toFixed(1);

console.log("At a " + interestRatePercentage + "% interest rate, your savings account will be worth $" + (savingsToTwoDecimals * 2) + " in " + yearsToDoubleToOneDecimal + " years");