let hoursWorked = 80;
let payRate = 7.25;
let total;

if (hoursWorked > 40) {
    let overtimeHours = (hoursWorked - 40);
    let normalTotal = (payRate * 40);
    let overtimeTotal = (payRate * 1.5 * overtimeHours);
    total = (normalTotal + overtimeTotal).toFixed(2);
} else {
    total = (payRate * hoursWorked).toFixed(2);
}

let filingStatus = "single";
let annualGrossIncome = total * 52;
let taxRate;

if (annualGrossIncome < 12000) {
    if (filingStatus === "single") {
        taxRate = 5;
    } else if (filingStatus === "joint")
        taxRate = 0;
} else if (annualGrossIncome < 25000) {
    if (filingStatus === "single") {
        taxRate = 10;
    } else if (filingStatus === "joint")
        taxRate = 6;
} else if (annualGrossIncome < 75000) {
    if (filingStatus === "single") {
        taxRate = 15;
    } else if (filingStatus === "joint")
        taxRate = 11;
} else if (annualGrossIncome >= 75000) {
    if (filingStatus === "single") {
        taxRate = 20;
    } else if (filingStatus === "joint")
        taxRate = 20;
}

let taxAmount = ((taxRate / 100) * total);
let netPay = total - taxAmount;
let annualNetIncome = (annualGrossIncome - taxAmount);

console.log(`You worked ${hoursWorked} hours this period`);
console.log(`Because you earn $${payRate} per hour, your gross pay is $${total}`);
console.log(`Your filing status is ${filingStatus}`);
console.log(`Your tax withholdings this period is $${taxAmount}`);
console.log(`Your net pay is $${netPay}`);