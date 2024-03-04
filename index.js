/*
1.Create console log to test that sheet is linked
2. Create string with assigned message
3. Create different variables for number combination
4. Create alert for HTML page with combination
5. See if I can try anything else after main project was done
 */

// test that js sheet is linked
console.log(`Hello`);

// create string that says You have received this message because you have been chosen to open an important vault. Here is the secret combination:
const str1 = `You have received this message because you have been chosen to open an important vault. Here is the secret combination:`;

// Test that str1 works 
console.log(str1);

// add variable one that shows number 10
const firstNum = 20 / 2;

// test that firstNum works 
console.log(firstNum);

// add variable two thats shows number 40
const secondNum = 20 + 20;

// test that secondNum worked 
console.log(secondNum);

// add varibale two thats shows number 39
const thirdNum = 40 - 1;

// test that thirdNum worked 
console.log(thirdNum);

// create an alert with the vault combo
alert(`Here is the vault code ` + firstNum + "-" + secondNum + "-" + thirdNum);

/* Extra practice after the main prject was done */

// Make a variable for the correct combination
const correctNumber = (`${firstNum}-${secondNum}-${thirdNum}`);

// test that it works
console.log(correctNumber);

// make a prompt alert for thm to enter the vault combo they just saw
const enterCombo = prompt("Please enter the vault combo: ");

// Was able toresearch and see how to make it so that they get an error if they enter the wrong id
if (enterCombo === correctNumber) {
  alert(`Welcome`);
} else {
  alert(`Wrong Password`);
}