let temp = 28;
let message;

if (temp < 0) {
  message = "Freezing Cold";
} else if (temp <= 15) {
  message = "Very Cold";
} else if (temp <= 25) {
  message = "Cold";
} else if (temp <= 35) {
  message = "Warm";
} else {
  message = "Hot";
}

console.log("Temperature:", temp + "°C");
console.log("Category:", message);