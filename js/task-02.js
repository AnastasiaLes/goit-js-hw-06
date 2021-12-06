const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul');

const ingredientsList = ingredients.map((ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  return li;
});
// ingredients.forEach(ingredient => {
  
//   ingredientsList.classList.add('item');
//   ingredientsList.textContent = ingredient;
  
// });

list.prepend(...ingredientsList);