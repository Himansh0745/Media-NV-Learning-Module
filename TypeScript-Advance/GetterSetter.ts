class EmpInfo{
    _name:string = "Sunny";
    _email:string = "sunny@gmail.com";

    get name(): string{
        return "Heyy " + this._name;
    }

    set email(val:string){
        this._email = "Your new email is : " + val;
    }
}

var emp = new EmpInfo();
console.log(emp.name);

emp.email = "sunny@example.com"
console.log(emp._email)