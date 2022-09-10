const Employee = require('./employee');

class Intern extends Employee {
 constructor(school) {
    this.school = school;

    // call parent class and gets its properties
    super(name,id,email,role);

}

getSchool() {
    console.log(`School: ${this.school}`);
}

// do something with get role here?

}

const intern = new Intern;
intern.getName();
intern.getId();
intern.getEmail();
intern.getRole();
intern.getSchool();