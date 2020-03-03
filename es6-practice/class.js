class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Little Angels School"
    }
}

const student1 = new Student(1, "Shadab");
const student2 = new Student(2, "Fahim");

console.log(student1, student2);

console.log(student1.name, student2.school);