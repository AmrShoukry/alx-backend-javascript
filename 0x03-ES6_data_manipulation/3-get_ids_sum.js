export default function getStudentIdsSum(students) {
  return students.reduce(
    (studentAccumulator, studentCurrent) => studentAccumulator + studentCurrent.id,
    0,
  );
}
