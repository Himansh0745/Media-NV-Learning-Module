import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class StudentService {
    private students = [
        {id: 1, name: 'Himanshu', age: 20},
        {id: 2, name: 'Sunny', age: 21},
        {id: 3, name: 'Akash', age: 22},
        {id: 4, name: 'Ramya', age: 23},
        {id: 5, name: 'Komal', age: 24},
    ]

    //GET

    //This code is for GET all data
    getAllStudents(){
        return this.students;
    }
    //This code is for GET single or Specific
    // data
    getStudentById(id: number){
        const student = this.students.find(student => student.id === id)
        if(!student)
            throw new NotFoundException('Student not found');
        return student;
    }



    //POST

    createStudent(data: {name:string; age:number}){
        const newStudent = {
            id:Date.now(),
            ...data,
        };
        this.students.push(newStudent)
        return newStudent;
    }



    //PUT
    updateAllStudent(id: number, data: {name:string; age:number}){
        const index = this.students.findIndex(student => student.id === id);
        if(index === -1)
            throw new NotFoundException('Student not found');
        this.students[index] = {...this.students[index], ...data}
        return this.students[index];
    }





    //PATCH

    patchStudent(id:number, data: Partial<{name:string; age:number}>) {
        const student = this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }
        


    //DELETE
    deleteStudent(id:number){
        const index = this.students.findIndex(student => student.id === id);
        if(index === -1)
            throw new NotFoundException('Student not found');
        const deleted = this.students.splice(index, 1);
        return {message: 'Student deleted successfully', student: deleted[0]};
        
    }

     

}
