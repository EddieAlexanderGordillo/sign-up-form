const validateForm = (e) => {
  const inputContainers = document.querySelectorAll('#form div.form__group');
  e.preventDefault();
  inputContainers.forEach((inputContainer) => {
    const input = inputContainer.querySelector('input');
    if (input.value == '') {
      inputContainer.classList.add('form__input--error');
    }
  });
};

export default validateForm;
