import studentList from "./student.js";

//filter() 메서드 예제
//시작이 '김'
const kimStudents = studentList.filter(function(student){
  return student.startsWith('김');
});
console.log(kimStudents);

//위치값이 짝수인 경우
const oddStudents = studentList.filter(function(student, index){
  return index % 2 === 0;
});
console.log(oddStudents);

//문자열의 길이가 3글자인 경우(예 : 홍길동 -> 3글자이름)
const threeLetterStudents = studentList.filter(function(student){
  return student.length === 3;
});
console.log(threeLetterStudents);

//.map() 으로 전체 적용
const studentsWithSuffix = studentList.map(function(student){
  return student + "님";
});
console.log(studentsWithSuffix);

//대문자로 변환
const upperCaseStudents = studentList.map(function(student){
  return student.toUpperCase();
});
console.log(upperCaseStudents);

//소문자로 변환
const lowerCaseStudents = studentList.map(function(student){
  return student.toLowerCase();
});
console.log(lowerCaseStudents);