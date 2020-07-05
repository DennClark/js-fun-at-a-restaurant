function nameMenuItem(name) {
  return "Delicious " + name;

  //nameMenuItem("Pizza");
  //nameMenuItem("Burrito");
  //nameMenuItem("Taco")
};


function createMenuItem(name, price, type) {
  var menuItem = {
    name,
    price,
    type,
  };
  return menuItem;
}

function addIngredients(ingredient, ingredients) {
  if (ingredients.includes(ingredient)) return;
  ingredients.push(ingredient);
};


function formatPrice(price) {
  return "$" + price;
};


function formatPrice(initialPrice) {
  return "$" + initialPrice;
}
//price is $6.00 so sum of 6.00 * .90 would result in answer
function decreasePrice(menuItem) {
  return menuItem * .90;
}


function createRecipe(title, ingredients, type) {
  var recipe = {
    title,
    ingredients,
    type,


  }
  return recipe;

}






module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
