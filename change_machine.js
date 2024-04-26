let dollarValue = 47;
// change = [twenties, tens, fives, ones]
let change = [0, 0, 0, 0];

if ((dollarValue / 20) >= 1) {
    let twenties = Math.floor(dollarValue / 20);
    change[0] = twenties;
    dollarValue -= (twenties * 20);
}
if ((dollarValue / 10) >= 1) {
    let tens = Math.floor(dollarValue / 10);
    change[1] = tens;
    dollarValue -= (tens * 10);
}
if ((dollarValue / 5) >= 1) {
    let fives = Math.floor(dollarValue / 5);
    change[2] = fives;
    dollarValue -= (fives * 5);
}
if ((dollarValue / 1) >= 1) {
    let ones = Math.floor(dollarValue);
    change[3] = ones;
    dollarValue -= (ones);
}

console.log(change);