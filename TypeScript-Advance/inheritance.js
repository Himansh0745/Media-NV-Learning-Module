// class student{
//     login(name:string, password:string){
//         if(name && password){
//             return "Student Login Successful";
//         }else{
//             return "Login Failed";
//         }
//     }
//     result(marks:number){
//         if(marks >= 40){
//             return "Student has passed the exam.";
//         }else{
//             return "Student has failed the exam.";
//         }
//     }    
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// var student1 = new student();
// console.log(student1.login("Himanshu", "password123"));
// console.log(student1.result(85));
// class Teacher{
//     login(name:string, password:string){
//         if(name && password){
//             return "Teacher Login Successful";
//         }else{
//             return "Login Failed";
//         }
//     }
//     subject(subject:number){
//             return "He is teaching : " + subject;
//     }    
// }
// var teacher1 = new Teacher();
// console.log(teacher1.login("Mr. Sharma", "teach123"));
// // console.log(teacher1.subject(101));
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.prototype.login = function (name, password) {
        if (name && password) {
            return "Login Successful";
        }
        else {
            return "Login Failed";
        }
    };
    return Auth;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    student.prototype.login = function (name, password) {
        if (name && password) {
            return "Student Login Successful";
        }
        else {
            return "Login Failed";
        }
    };
    student.prototype.result = function (marks) {
        if (marks >= 40) {
            return "Student has passed the exam.";
        }
        else {
            return "Student has failed the exam.";
        }
    };
    return student;
}(Auth));
var student1 = new student();
console.log(student1.login("Himanshu", "password123"));
console.log(student1.result(85));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.login = function (name, password) {
        if (name && password) {
            return "Teacher Login Successful";
        }
        else {
            return "Login Failed";
        }
    };
    Teacher.prototype.subject = function (subject) {
        return "He is teaching in Class : " + subject;
    };
    return Teacher;
}(Auth));
var teacher1 = new Teacher();
console.log(teacher1.login("Mr. Sharma", "teach123"));
console.log(teacher1.subject(10));
