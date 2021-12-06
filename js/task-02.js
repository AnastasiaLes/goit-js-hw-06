const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul');


ingredients.forEach(ingredient => {
  const ingredientsList = document.createElement('li');
  ingredientsList.classList.add('item');
  ingredientsList.textContent = ingredient;
  list.prepend(ingredientsList);
});
