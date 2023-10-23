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
//recipes 1
const recipe1 = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"],
};

console.log(recipe1.title);
console.log(`Serves: ${recipe1.servings}`);
console.log("Ingredients:");
recipe1.ingredients.forEach((ingredient) => console.log(ingredient));
console.log();

// recipes 2
const recipe2 = {
  title: "Spaghetti Bolognese",
  servings: 4,
  ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic"],
};

console.log(recipe2.title);
console.log(`Serves: ${recipe2.servings}`);
console.log("Ingredients:");
recipe2.ingredients.forEach((ingredient) => console.log(ingredient));
console.log();

// recipes 3
const recipe3 = {
  title: "Caesar Salad",
  servings: 2,
  ingredients: [
    "romaine lettuce",
    "croutons",
    "Parmesan cheese",
    "Caesar dressing",
  ],
};

console.log(recipe3.title);
console.log(`Serves: ${recipe3.servings}`);
console.log("Ingredients:");
recipe3.ingredients.forEach((ingredient) => console.log(ingredient));
console.log();

// recipes 4
const recipe4 = {
  title: "Chicken Alfredo",
  servings: 3,
  ingredients: [
    "chicken breast",
    "fettuccine pasta",
    "heavy cream",
    "Parmesan cheese",
  ],
};

console.log(recipe4.title);
console.log(`Serves: ${recipe4.servings}`);
console.log("Ingredients:");
recipe4.ingredients.forEach((ingredient) => console.log(ingredient));
console.log();

//recipes 5
const recipe5 = {
  title: "Chocolate Chip Cookies",
  servings: 24,
  ingredients: ["butter", "sugar", "eggs", "flour", "chocolate chips"],
};

console.log(recipe5.title);
console.log(`Serves: ${recipe5.servings}`);
console.log("Ingredients:");
recipe5.ingredients.forEach((ingredient) => console.log(ingredient));
console.log();
