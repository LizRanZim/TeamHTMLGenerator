const Employee = require('./employee');

class Engineer extends Employee {
 constructor(github) {
    super();
    this.github = github;


}

getGithub() {
    return this.github;
}

getRole() {
    return 'Engineer';

}

}

const engineer = new Engineer;
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getRole();
engineer.getGithub();

module.exports = Engineer;