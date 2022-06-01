import PromoSection from './components/PromoSection/PromoSection';
import InfoSection from './components/InfoSection/InfoSection';

import './styles/styles.css';
import './styles/desktop.css';
import validateForm from './components/FormValidation/FormValidation';

window.addEventListener('load', () => {
  const main = document.getElementById('main');

  main.insertAdjacentHTML('beforeEnd', InfoSection());
  main.insertAdjacentHTML('beforeEnd', PromoSection());

  const form = document.getElementById('form');

  const inputContainers = form.querySelectorAll('div.form__group');
  inputContainers.forEach((inputContainer) => {
    console.log(inputContainers, 'AQUIIIII');
    console.log(inputContainer, 'esetee');

    const input = inputContainer.querySelector('input');
    console.log(input, 'ollll');
    input.addEventListener('keyup', () => {
      removeErrorClass(inputContainer);
    });
    input.addEventListener('blur', () => {
      removeErrorClass(inputContainer);
    });
  });

  const removeErrorClass = (inputContainer) => {
    inputContainer.classList.remove('form__input--error');
  };

  form.addEventListener('submit', validateForm);
});
