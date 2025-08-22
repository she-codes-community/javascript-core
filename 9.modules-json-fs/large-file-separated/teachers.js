// Teacher data
let teachers = [
  { name: "Ms. Green", subject: "Math" },
  { name: "Mr. Blue", subject: "History" }
];

export function listTeachers() {
  return [...teachers];
}

export function addTeacher(name, subject) {
  teachers.push({ name, subject });
}

export function findTeacher(subject) {
  return teachers.find(t => t.subject === subject) || null;
}
