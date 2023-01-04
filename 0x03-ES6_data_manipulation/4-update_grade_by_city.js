export default function updateStudentGradeByCity(tab, city, newgrade) {
  return tab.filter((x) => x.location === city).map((x) => {
    let grade = newgrade.filter((u) => u.studentId === x.id)[0];
    if (grade === undefined) grade = 'N/A';
    else grade = grade.grade;
    return {
      id: x.id,
      firstname: x.firstName,
      location: x.location,
      grade,
    };
  });
}
