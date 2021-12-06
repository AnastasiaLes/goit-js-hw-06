
// const counterValue = document.getElementById('value');


const decrementBtn = document.querySelector('button')
// console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
// console.log(incrementBtn);

let value = 0;
const changeValue = (num) => {
    value = value + num;
    console.log(value);
    const counterValue = document.getElementById('value');
    // console.log(counterValue);

    counterValue.textContent = `${value}`;
};
decrementBtn.addEventListener('click', () => changeValue(-1));
incrementBtn.addEventListener('click', () => changeValue(1));
