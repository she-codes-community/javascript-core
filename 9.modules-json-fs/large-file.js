// משתנים גלובליים
let students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 75 },
  { name: "Charlie", grade: 82 }
];

let teachers = [
  { name: "Ms. Green", subject: "Math" },
  { name: "Mr. Blue", subject: "History" }
];

// פונקציות מתמטיות
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b !== 0 ? a / b : 0; }
function square(x) { return x * x; }
function average(arr) {
  let sum = 0;
  for (let x of arr) sum += x;
  return sum / arr.length;
}

// פונקציות הודעות
function greet(name) { return "Hello, " + name + "!"; }
function goodbye(name) { return "Goodbye, " + name + "!"; }
function warn(name) { return "Warning, " + name + "!"; }
function celebrate(name) { return "Congratulations, " + name + "!"; }

// פונקציות ניהול תלמידים
function printStudents() {
  for (let s of students) console.log(s.name + " → " + s.grade);
}
function averageGrade() {
  let total = 0;
  for (let s of students) total += s.grade;
  return total / students.length;
}
function addStudent(name, grade) {
  students.push({ name, grade });
}
function removeStudent(name) {
  students = students.filter(s => s.name !== name);
}

// פונקציות ניהול מורים
function printTeachers() {
  for (let t of teachers) console.log(t.name + " teaches " + t.subject);
}
function addTeacher(name, subject) {
  teachers.push({ name, subject });
}
function findTeacher(subject) {
  return teachers.find(t => t.subject === subject);
}

// פונקציות חישוב ציונים
function maxGrade() {
  let max = 0;
  for (let s of students) {
    if (s.grade > max) max = s.grade;
  }
  return max;
}
function minGrade() {
  let min = 100;
  for (let s of students) {
    if (s.grade < min) min = s.grade;
  }
  return min;
}
function gradeReport() {
  return {
    average: averageGrade(),
    highest: maxGrade(),
    lowest: minGrade()
  };
}

// פונקציות אקראיות שאין קשר לנושא
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatDate(date) {
  return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
}
function logMessage(message) {
  console.log("[" + formatDate(new Date()) + "]: " + message);
}
function sleep(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {}
}
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ועוד ועוד...
// נניח כאן עוד עשרות פונקציות שלא קשורות אחת לשנייה,
// הכל דחוס באותו קובץ אחד, בלי סדר אמיתי...
