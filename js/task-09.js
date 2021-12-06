function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());

const bodyEl = document.querySelector('body');
console.log(bodyEl);
const buttonEl = document.querySelector('.change-color');
console.log(buttonEl);
const colorNumber = document.querySelector('.color');
console.log(colorNumber);

const getChangeColor = () => {
  bodyEl.style.background = getRandomHexColor()
  colorNumber.textContent = getRandomHexColor()
};

buttonEl.addEventListener('click', getChangeColor)
