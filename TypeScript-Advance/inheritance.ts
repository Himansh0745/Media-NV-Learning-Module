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





class Auth{
    login(name:string, password:string): string{
        if(name && password){
            return "Login Successful";
        }else{
            return "Login Failed";
        }
    }
}
class student extends Auth{
    login(name:string, password:string){
        if(name && password){
            return "Student Login Successful";
        }else{
            return "Login Failed";
        }
    }
    result(marks:number){
        if(marks >= 40){
            return "Student has passed the exam.";
        }else{
            return "Student has failed the exam.";
        }
    }    
}

var student1 = new student();
console.log(student1.login("Himanshu", "password123"));
console.log(student1.result(85));


class Teacher extends Auth{
    login(name:string, password:string){
        if(name && password){
            return "Teacher Login Successful";
        }else{
            return "Login Failed";
        }
    }
    subject(subject:number){
            return "He is teaching in Class : " + subject;
        
    }    
}

var teacher1 = new Teacher();
console.log(teacher1.login("Mr. Sharma", "teach123"));
console.log(teacher1.subject(10)); 