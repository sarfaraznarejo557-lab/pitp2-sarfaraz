// 1. The prompt is displayed to the user
let ageInput = prompt("How old are you?", "18");

// 2. The code then checks the returned value
if (ageInput === null) {
  console.log("User cancelled the operation.");
} else if (ageInput === "") {
  console.log("User didn't enter an age.");
} else {
  // Since prompt() always returns a string, we might convert it to a number
  let age = parseInt(ageInput);
  
  if (isNaN(age)) {
    console.log(`"${ageInput}" is not a valid number.`);
  } else {
    console.log(`You are ${age} years old.`);
  }
}