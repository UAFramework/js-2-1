/*
  The Recipe Card
  Never forget another recipe!

  Create an object to hold information on your favorite recipe.

  It should have properties for

  - title (a string),
  - servings (a number), and
  - ingredients (an array of strings)

  On separate lines (one console.log statement for each), log the recipe information so it looks like:

  Mole
  Serves: 2
  Ingredients:
  cinnamon
  cumin
  cocoa

  You should write and log at least 5 recipes
*/

let recipe1 = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
};

let recipe2 = {
  title: "Pancakes",
  servings: 6,
  ingredients: ["flour", "eggs", "milk", "sugar", "salt"]
};

let recipe3 = {
  title: "Dumplings",
  servings: 4,
  ingredients: ["dough", "potatoes", "onion", "salt", "sour cream"]
};

let recipe4 = {
  title: "Cheesecakes",
  servings: 3,
  ingredients: ["cottage cheese", "eggs", "sugar", "vanilla sugar", "salt"]
};

let recipe5 = {
  title: "Pilaf",
  servings: 4,
  ingredients: ["rice", "lamb or beef", "onion", "carrots", "vegetable oil", "garlic", "cumin", "coriander", "salt", "black pepper"]
};


console.log(recipe1.title);
console.log(`Serves: ${recipe1.servings}`);
console.log("Ingredients:");
for (let ingredient of recipe1.ingredients) {
  console.log(ingredient);
}

console.log('\n');

console.log(recipe2.title);
console.log(`Serves: ${recipe2.servings}`);
console.log("Ingredients:");
for (let ingredient of recipe2.ingredients) {
  console.log(ingredient);
}

console.log('\n');

console.log(recipe3.title);
console.log(`Serves: ${recipe3.servings}`);
console.log("Ingredients:");
for (let ingredient of recipe3.ingredients) {
  console.log(ingredient);
}

console.log('\n');

console.log(recipe4.title);
console.log(`Serves: ${recipe4.servings}`);
console.log("Ingredients:");
for (let ingredient of recipe4.ingredients) {
  console.log(ingredient);
}

console.log(recipe5.title);
console.log(`Serves: ${recipe5.servings}`);
console.log("Ingredients:");
for (let ingredient of recipe5.ingredients) {
  console.log(ingredient);
}