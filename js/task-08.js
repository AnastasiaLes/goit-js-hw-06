const formEl = document.querySelector('.login-form');
console.log(formEl);

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();
   
    const formElements = event.currentTarget.elements
    console.dir(formElements);

    const email = formElements.email.value;
    const password = formElements.password.value;
    
    if (email === "" || password === "") {
        return alert('Please fill in all the fields!');
     }

    const formData = { email, password };
    console.log(formData);

    event.currentTarget.reset();
};
