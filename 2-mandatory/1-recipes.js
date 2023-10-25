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

// write code here

let recipe1 =  {
  title: "Usvar",
  servings: 12,
  ingredients: ['water', 'apple', 'sugar', 'anis']
  }
let recipe2 = {
  title: "Khachapuri",
  servings: 3,
  ingredients: ['water', 'salt', 'mehl', 'cheese', 'eggs']
  }
let recipe3 = {
  title: "Sweetnapkins",
  servings: 1,
  ingredients: ['napkins', 'honey', 'bee']
  }
let recipe4 = {
  title: 'Coffee',
  servings: 2,
  ingredients: ['coffeebeans', 'water', 'pepper', 'salt']
  }

let recipe5 = {
title: 'Plow',
servings: 12,
ingredients: ['meat', 'rice', 'onion', 'carrot', 'garlic', 'water', 'species']
}


console.log (recipe1.title, "Serves: "+ recipe1.servings, "Ingredients: " + recipe1.ingredients)
console.log (recipe2.title, "Serves: "+ recipe2.servings, "Ingredients: " + recipe2.ingredients)
console.log (recipe3.title, "Serves: "+ recipe3.servings, "Ingredients: " + recipe3.ingredients)
console.log (recipe4.title, "Serves: "+ recipe4.servings, "Ingredients: " + recipe4.ingredients)
console.log (recipe5.title, "Serves: "+ recipe5.servings, "Ingredients: " + recipe5.ingredients)


