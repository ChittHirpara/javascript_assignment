var sub1 = 85, sub2 = 90, sub3 = 78, sub4 = 88, sub5 = 92;
var total = sub1 + sub2 + sub3 + sub4 + sub5;
var percentage = (total / 500) * 100;
var grade;

if (percentage >= 90) {
  grade = "Grade A";
} else if (percentage >= 80) {
  grade = "Grade B";
} else if (percentage >= 70) {
  grade = "Grade C";
} else if (percentage >= 60) {
  grade = "Grade D";
} else {
  grade = "Fail";
}

console.log("Total Marks:", total);
console.log("Percentage:", percentage.toFixed(2) + "%");

console.log("Grade:", grade);
