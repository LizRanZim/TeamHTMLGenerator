const Manager = require("../lib/manager")
const newManager = new Manager("Liz", "16", "manager@test.com","023")

describe("Manager properties", () => {
  describe("Name", () => {
    it('should return the name of the manager', () => {
      expect(newManager.name).toEqual("Liz");

    });
  });
     describe("id", () => {
      it('should return the id of the manager', () => {
        expect(newManager.id).toEqual("16");
  
      });
    });

    describe("email", () => {
      it('should return the email of the manager', () => {
        expect(newManager.email).toEqual("manager@test.com");
  
      });
    });

    describe("office number", () => {
        it('should return the office number of the manager', () => {
          expect(newManager.officeNumber).toEqual("023");
    
        });
      });
  


})