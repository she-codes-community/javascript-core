// Grade computations
import { grades } from "./students.js";
import { average } from "./utils/math.js";

export function maxGrade() {
  const g = grades();
  let max = -Infinity;
  for (let s of g) if (s > max) max = s;
  return Number.isFinite(max) ? max : 0;
}

export function minGrade() {
  const g = grades();
  let min = Infinity;
  for (let s of g) if (s < min) min = s;
  return Number.isFinite(min) ? min : 0;
}

export function averageGrade() {
  return average(grades());
}

export function gradeReport() {
  return {
    average: averageGrade(),
    highest: maxGrade(),
    lowest: minGrade()
  };
}
