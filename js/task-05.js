const nameInput = document.getElementById('name-input');
console.log(nameInput);

const nameEl = document.getElementById('name-output');

const changeName = () => {
    console.log(nameEl.textContent.length);
    (nameEl.textContent.length > 1)
        ? nameEl.textContent = nameInput.value
        : nameEl.textContent = 'Anonymous';
 }; 

nameInput.addEventListener('input', changeName);
