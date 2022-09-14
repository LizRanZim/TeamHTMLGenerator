const Engineer = require("../lib/engineer")
const newEngineer = new Engineer("Liz", "75", "engineer@test.com","LizRanZim")

describe("Engineer properties", () => {
  describe("Name", () => {
    it('should return the name of the Engineer', () => {
      expect(newEngineer.name).toEqual("Liz");

    });
  });
     describe("id", () => {
      it('should return the id of the Engineer', () => {
        expect(newEngineer.id).toEqual("75");
  
      });
    });

    describe("email", () => {
      it('should return the email of the Engineer', () => {
        expect(newEngineer.email).toEqual("engineer@test.com");
  
      });
    });

    describe("github", () => {
        it('should return the github of the manager', () => {
          expect(newEngineer.github).toEqual("LizRanZim");
    
        });
      });
  


})