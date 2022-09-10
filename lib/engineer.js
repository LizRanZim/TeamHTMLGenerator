const Employee = require('./employee');

class Engineer extends Employee {
 constructor(github) {
    this.github = github;

    // call parent class and gets its properties
    super(name,id,email,role);

}

getGithub() {
    console.log(`Github: ${this.github}`);
}

// do something with get role here?

}

const engineer = new Engineer;
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getRole();
engineer.getGithub();