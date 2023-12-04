function getStudent(newGrades, student) {
  const matchingGrade = newGrades.find(
    (newGrade) => newGrade.studentId === student.id,
  );

  if (matchingGrade) {
    const newStudent = { ...student, grade: matchingGrade.grade };
    return newStudent;
  }
  const newStudent = { ...student, grade: 'N/A' };
  return newStudent;
}
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => getStudent(newGrades, student));
}
