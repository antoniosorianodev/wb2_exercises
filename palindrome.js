let word = "meow";
let reversedWord = word.split('').reverse().join('');
// As I understand it, .split will breakup word by each character and return an array,
// .reverse will return that array in opposite order,
// then .join will take all items in the array and combine them into a sting

if (word === reversedWord) {
    console.log(word + " is a palindrome")
} else {
    console.log(word + " is not a palindrome")
}