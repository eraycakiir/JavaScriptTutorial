 // iki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız


let student1Name ="Ada";
let student1LastName="Bilgi";
let student1Birthday=2010;
let student1Exam1=70
let student1Exam2=70
let student1Exam3=80
let student1average= student1Exam1+student1Exam2+student1Exam3/3;

let student2Name ="Yigit";
let student2LastName="Bilgi";
let student2Birthday=2010;
let student2Exam1=40
let student2Exam2=40
let student2Exam3=50

let student2average= student2Exam1+student2Exam2+student2Exam3/3;


let nowYear= new Date().getFullYear();

let student1_age= nowYear-student1Birthday;
let student2_age= nowYear-student2Birthday;
console.log(student1_age);
console.log(student2_age);

console.log(student1average);
console.log(student2average);






