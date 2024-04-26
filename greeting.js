let currentHour = 17;
let greeting = "";

if (currentHour < 10) {
    greeting = "Good morning!";
} else if (10 <= currentHour && currentHour < 17) {
    greeting = "Good day!";
} else {
    greeting = "Good evening!";
}

console.log(greeting);