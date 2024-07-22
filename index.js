// Your code here
// helpers.js
class Animal {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  }
  
  class Cat extends Animal {
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog extends Animal {
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird extends Animal {
    speak() {
      if (this.name === 'Pablo') {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  module.exports = {
    Cat,
    Dog,
    Bird,
  };
  