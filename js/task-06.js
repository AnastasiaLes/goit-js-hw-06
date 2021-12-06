const getInputField = document.getElementById('validation-input');
// const getDataLength = document.querySelector(input[data-length]);
console.log(getInputField);
// console.log(getDataLength);

const checkInputField = () => {
    if (getInputField.value.length === Number(getInputField.dataset.length)) {
        getInputField.classList.remove('invalid')
        getInputField.classList.add('valid')
    } else {
        getInputField.classList.remove('valid')
        getInputField.classList.add('invalid') }

};
    

    // getInputField.value.length === Number(getInputField.dataset.length)
    //     ? getInputField.classList.add('valid')
    //     : getInputField.classList.add('invalid');


getInputField.addEventListener('blur', checkInputField)