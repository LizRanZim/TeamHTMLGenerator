const Employee = require('./employee');

class Manager extends Employee {
 constructor(officeNumber) {
    super(name,id,email,role);
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


module.exports = Manager;