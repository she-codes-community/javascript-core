// Main application file
import { greet, goodbye, warn, celebrate } from "./utils/messages.js";
import { add, subtract, multiply, divide, square, average } from "./utils/math.js";

import {
  listStudents, addStudent, removeStudent, grades as studentGrades
} from "./students.js";

import {
  listTeachers, addTeacher, findTeacher
} from "./teachers.js";

import {
  gradeReport, averageGrade, maxGrade, minGrade
} from "./reports.js";

// ---- Demo: messages ----
console.log(greet("Team"));
console.log(warn("Everyone"));
console.log(celebrate("Alice"));

// ---- Demo: students ----
console.log("Students (before):", listStudents());
addStudent("Dina", 88);
console.log("Students (after add):", listStudents());
console.log("Student grades:", studentGrades());
console.log("Average grade (reports):", averageGrade());
console.log("Max grade:", maxGrade());
console.log("Min grade:", minGrade());
console.log("Grade report:", gradeReport());

// Remove a student (to show parity with original)
removeStudent("Bob");
console.log("Students (after remove Bob):", listStudents());

// ---- Demo: teachers ----
console.log("Teachers (before):", listTeachers());
addTeacher("Ms. Red", "Science");
console.log("Teachers (after add):", listTeachers());
console.log("Find teacher by subject (Math):", findTeacher("Math"));

// ---- Demo: math ----
console.log("add(2, 3) =", add(2, 3));
console.log("subtract(10, 4) =", subtract(10, 4));
console.log("multiply(3, 3) =", multiply(3, 3));
console.log("divide(10, 2) =", divide(10, 2));
console.log("square(5) =", square(5));
console.log("average([1,2,3,4]) =", average([1, 2, 3, 4]));

console.log(goodbye("Team"));
