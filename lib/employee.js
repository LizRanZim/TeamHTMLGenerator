class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        console.log(`Name: ${this.name}`);
    }

    getId() {
        console.log(`Id: ${this.id}`);
    }

    getEmail() {
        console.log(`Email: ${this.email}`);
    }

    getRole() {
        if (role === 'Employee') {
            console.log('Employee');
// will also need to assign each of these roles to html variables

// see lesson 10-25 restaurant.js for example here for how to update role in another way

        }
        else if (role === 'Manager') {
            console.log('Manager');
        }
        else if (role === 'Engineer') {
            console.log('Engineer');
        }
        else if (role === 'Intern') {
            console.log('Intern');
        }

    }
}

const employee = new Employee
employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();

module.exports = Employee;