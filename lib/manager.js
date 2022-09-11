const Employee = require('./employee');

class Manager extends Employee {
 constructor(officeNumber) {
    super();
    this.officeNumber = officeNumber;


}



getOffice(){
   return this.officeNumber;
}

getRole() {
    return 'Manager';

}

}

const manager = new Manager;
manager.getName();
manager.getId();
manager.getEmail();
manager.getRole();
manager.getOffice();

module.exports = Manager;