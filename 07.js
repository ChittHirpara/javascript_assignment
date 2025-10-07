var marks = 86;
var income = 280000;
var eligibility;

if (marks >= 85 && income < 300000) {
  eligibility = "Full Scholarship";
} else if (marks >= 70 && income < 500000) {
  eligibility = "Half Scholarship";
} else {
  eligibility = "Not eligible for scholarship";
}

console.log("Marks:", marks + "%");
console.log("Family Income: ₹" + income);

console.log("Scholarship Status:", eligibility);
