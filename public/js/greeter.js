var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + "" + middleInitial + "" + lastName;
    } //在构造函数的参数上使用public等同于创建了同名的成员变量。
    return Student;
}());
function greetor(person) {
    return "Hello, " + person.firstName + "" + person.lastName;
}
var user = new Student("JANE", "M.", "User");
document.body.innerHTML = greetor(user);
