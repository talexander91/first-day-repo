const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it("should reverse a given string", () => {
      const str = "Hello World";
      const reversed = "dlroW olleH";
      const result = new Algo().reverse(str);
      expect(result).toEqual(reversed);
    });
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it("should return true if string is palindrome", () => {
      const str = "racecar";
      const result = new Algo().isPalindrome(str);
      expect(result).toEqual(true);
    });
    it("should return false if not", () => {
      const str = "neon";
      const result = new Algo().isPalindrome(str);
      expect(result).isEqual(false);
    });
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it("sahould capitalize the first letter of every word in a string", () => {
      const str = "capitalize every word in this string.";
      const capitalized = "Capitalize Every World In This String.";
      const result = new Algo().capitalize(str);
      ecpect(result).toEqual(capitalized);
    });
  });
});
