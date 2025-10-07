var a = 45, b = 78, c = 32;
var largest;

if (a >= b && a >= c) {
  largest = a;
} else if (b >= a && b >= c) {
  largest = b;
} else {
  largest = c;
}


console.log("Largest number is:", largest);
