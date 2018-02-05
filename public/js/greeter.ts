class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + "" + middleInitial + "" + lastName;
    }//在构造函数的参数上使用public等同于创建了同名的成员变量。
}

interface Person {
    firstName:string;
    lastName:string;
}

function greetor(person:Person) {
    return "Hello, "+person.firstName+""+person.lastName;
}

let user = new Student("JANE","M.","User");

document.body.innerHTML = greetor(user);