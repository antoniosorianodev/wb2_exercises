let dollarValue = 47;
let change = [];

if ((dollarValue / 20) >= 1) {
    let twenties = Math.floor(dollarValue / 20);
    change[0] = twenties;
    dollarValue -= (twenties * 20);
} else {
    change[0] = 0;
}
if ((dollarValue / 10) >= 1) {
    let tens = Math.floor(dollarValue / 10);
    change[1] = tens;
    dollarValue -= (tens * 10);
} else {
    change[1] = 0;
}
if ((dollarValue / 5) >= 1) {
    let fives = Math.floor(dollarValue / 5);
    change[2] = fives;
    dollarValue -= (fives * 5);
} else {
    change[2] = 0;
}
if ((dollarValue / 1) >= 1) {
    let ones = Math.floor(dollarValue / 1);
    change[3] = ones;
    dollarValue -= (ones * 1);
} else {
    change[3] = 0;
}

console.log(change);