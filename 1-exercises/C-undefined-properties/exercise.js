/*
    You have already seen "undefined", either in an error message or being output from your program.

    As a reminder, in some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are some examples of when you would see undefined when using objects.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let car = {
  brand: "Ford",
  yearsOld: 8,
};

console.log(car["colour"]);

/*In this example, you're trying to access the property "colour" in the car object, but it doesn't exist in the object. 
As a result, the code will output "undefined" because there is no value assigned to the "colour" property.
*/

// Example 2
function sayHelloToUser(user) {
  console.log(`Hello ${user.firstName}`);
}

let user = {
  name: "Mira",
};

sayHelloToUser(user);

/*In this example, you are trying to access the property "firstName" in the user object. 
However, the user object only has a "name" property, and "firstName" is not defined. Consequently, 
you will see "undefined" because there is no "firstName" property in the user object.*/

// Example 3
let myPet = {
  animal: "Cat",
  getName: function () {
    "My pet's name is Fluffy";
  },
};

console.log(myPet.getName());
/*method must return a value, it just returns a string without using the return keyword. 
It does not return a value. To fix this we have to use return*/
