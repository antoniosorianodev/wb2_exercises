let hoursWorked = 80;
let payRate = 7.25;
let total;

if (hoursWorked > 40) {
    let overtimeHours = (hoursWorked - 40);
    let normalTotal = (payRate * 40);
    let overtimeTotal = (payRate * 1.5 * overtimeHours);
    total = normalTotal + overtimeTotal;
} else {
    total = (payRate * hoursWorked).toFixed(2);
}

console.log("For " + hoursWorked + "hrs worked, you've earned $" + total);