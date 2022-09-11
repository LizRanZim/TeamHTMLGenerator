// What should the function employee be doing, it should console.log the response

// Example 1

describe("add", function() {
    it("should add two numbers", function() {
      var num1 = 10;
      var num2 = 24;
  
      var result = add(num1, num2);
  
      expect(result).to.eql(34);
    });
  });

//   Example 2
  describe("capitalize", () => {
    it("should take a string as an argument...see below", () => {
      const str = "this is a string";
      const cap = "This is a String";
      const algo = new Algo();
      const result = algo.capitalize(str);
      expect(result).toEqual(cap);
    })
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
  });
