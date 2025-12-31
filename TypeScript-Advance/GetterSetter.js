var EmpInfo = /** @class */ (function () {
    function EmpInfo() {
        this._name = "Sunny";
        this._email = "sunny@gmail.com";
    }
    Object.defineProperty(EmpInfo.prototype, "name", {
        get: function () {
            return "Heyy " + this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmpInfo.prototype, "email", {
        set: function (val) {
            this._email = "Your new email is : " + val;
        },
        enumerable: false,
        configurable: true
    });
    return EmpInfo;
}());
var emp = new EmpInfo();
console.log(emp.name);
emp.email = "sunny@example.com";
console.log(emp._email);
