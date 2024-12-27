// Get the total value from the user
let totalValue = prompt("Enter the total value:");

// Get the obtained value from the user
let obtainedValue = prompt("Enter the obtained value:");

// Convert input strings to numbers
totalValue = Number(totalValue);
obtainedValue = Number(obtainedValue);

// Calculate the percentage
let percentage = (obtainedValue / totalValue) * 100;

// Display the result using alert
alert(`The percentage is ${percentage.toFixed(2)}%`);