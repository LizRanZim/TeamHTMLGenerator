const Employee = require('./employee');

class Manager extends Employee {
 constructor(officeNumber) {
    this.officeNumber = officeNumber;

    // call parent class and gets its properties
    super(name,id,email,role);

}

// do something with get role here?

getOffice(){
    console.log(`Office: ${this.officeNumber}`);
}

}

const manager = new Manager;
manager.getName();
manager.getId();
manager.getEmail();
manager.getRole();
manager.getOffice();