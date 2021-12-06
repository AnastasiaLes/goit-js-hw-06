function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
console.log(inputEl);
const createBtnEl = document.querySelector('button[data-create]');
console.log(createBtnEl);
const destroyBtnEl = document.querySelector('button[data-destroy]');
console.log(destroyBtnEl);
const boxesPlace = document.getElementById('boxes');
console.log(boxesPlace);
const btn = document.querySelector('button');

// const createNewEl = document.createElement('div');
// // createNewEl.textContent = 'Hello world!';
// createNewEl.style.width = '30px';
// createNewEl.style.height = '30px';
// createNewEl.style.backgroundColor = getRandomHexColor();
// console.log(createNewEl);

const createNewEl = document.createElement('div');
    createNewEl.style.width = '30px';
    createNewEl.style.height = '30px';
    createNewEl.style.backgroundColor = getRandomHexColor();

createBtnEl.addEventListener('click', onCreateElements);

function onCreateElements (event) {
  const amount = inputEl.value;
  console.log(amount);
 

  for (let i = 1; i <= amount; i += 1)
  {
    console.log(createNewEl);
    boxesPlace.append(createNewEl);
  };
  
 };

// let amount = 0;
// inputEl.addEventListener('blur', () => {
//   amount = inputEl.value;
// });

// 
// const addEl = () => {
  
//   // newArr.forEach(function (element, amount) {
//   //   this.PushManager(createNewEl);
//   // })
//   //  boxesPlace.append(newArr)
  
//   if (inputEl.value > 0) {
//     boxesPlace.append(createNewEl)
//   }
//  };
// console.log(newArr);

destroyBtnEl.addEventListener('click', removeEl);
function removeEl(event) {
boxesPlace.remove(createNewEl)
 }



