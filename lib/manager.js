const Employee = require('./employee');

class Manager extends Employee {
 constructor(role, name, id, email,officeNumber) {
    super(role,name,id,email);
    this.officeNumber = officeNumber;


}



getOffice(){
   return this.officeNumber;
}

getRole() {
    return 'Manager';

}

}




module.exports = Manager;