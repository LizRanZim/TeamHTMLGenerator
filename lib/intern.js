const Employee = require('./employee');

class Intern extends Employee {
 constructor(school) {
    super();
    this.school = school;
   
}

getSchool() {

    return this.school;
}

getRole() {
    return 'Intern';

}

}

const intern = new Intern;
intern.getName();
intern.getId();
intern.getEmail();
intern.getRole();
intern.getSchool();

module.exports = Intern;