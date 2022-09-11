const Employee = require("../lib/employee")
const newEmployee = new Employee("Liz", "65", "liz@test.com")

describe("Employee properties", () => {
  describe("Name", () => {
    it('should return the name of the employee', () => {
      expect(newEmployee.name).toEqual("Liz");

    });
  });
     describe("id", () => {
      it('should return the id of the employee', () => {
        expect(newEmployee.id).toEqual("65");
  
      });
    });

    describe("email", () => {
      it('should return the email of the employee', () => {
        expect(newEmployee.email).toEqual("liz@test.com");
  
      });
    });


})