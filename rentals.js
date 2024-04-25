let tourists = 38;
// van seats 15, each one costs $250

let vanCount = Math.ceil(tourists / 15);
let cost = vanCount * 250;
// rounding only does so up to the integer, so to round to the hundreths place:
// 100x the number, so it's a "significant figure", round to lose everything after, then divide by 100 to get back to normal
let costPerPerson = (Math.round(((cost / tourists) * 100))) / 100;

console.log("For a group of " + tourists + " tourists, they would need to rent " + vanCount + " vans, with the cost per rider being $" + costPerPerson);