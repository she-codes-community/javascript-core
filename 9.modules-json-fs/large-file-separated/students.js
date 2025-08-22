// Student data + operations
let students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 75 },
  { name: "Charlie", grade: 82 }
];

export function listStudents() {
  return [...students];
}

export function addStudent(name, grade) {
  students.push({ name, grade });
}

export function removeStudent(name) {
  students = students.filter(s => s.name !== name);
}

export function grades() {
  return students.map(s => s.grade);
}
