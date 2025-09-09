// Student Grade Generator
function gradeGenerator(marks){ if (marks<0||marks>100){
  console.log("Invalid marks");
  return;
}
//Declaring the function grade generator with the parameter marks
marks = Number(marks);
//Converting the marks to a number
  if (marks > 79 ) {
    console.log("Grade: A");
    // Marks above 79 are graded as A
  } else if (marks >= 60 && marks <= 79) {
    console.log("Grade: B");
    // Marks between 60 and 79 are graded as B
  } else if (marks >= 49 && marks <= 59) {
    console.log("Grade: C");
    // Marks between 49 and 59 are graded as C
  } else if (marks >= 40 && marks <= 49) {
    console.log("Grade: D");
    // Marks between 40 and 49 are graded as D
  } else {
    console.log("Grade: E");
    // Marks below 40 are graded as E
}
return marks;
}
gradeGenerator();