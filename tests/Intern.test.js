const Intern = require("../lib/Intern")
const newIntern = new Intern("Carmen", "15", "Intern@test.com","Uconn")

describe("Intern properties", () => {
  describe("Name", () => {
    it('should return the name of the Intern', () => {
      expect(newIntern.name).toEqual("Carmen");

    });
  });
     describe("id", () => {
      it('should return the id of the Intern', () => {
        expect(newIntern.id).toEqual("15");
  
      });
    });

    describe("email", () => {
      it('should return the email of the Intern', () => {
        expect(newIntern.email).toEqual("Intern@test.com");
  
      });
    });

    describe("school", () => {
        it('should return the school of the intern', () => {
          expect(newIntern.school).toEqual("Uconn");
    
        });
      });
  


})