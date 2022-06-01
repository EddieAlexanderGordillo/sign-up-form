const Input = ({
  errorMessage = 'this input',
  placeholder = '',
  type = 'text',
  field = '',
}) =>
  `
  <div class="form__group" id="group__${field}">
    <div class="form__group-input">
      <input type="${type}" class="form__input" name="${field}" id="${field}" placeholder="${placeholder}" autocomplete="off">
      <img class="form__validation-status" src="../../assets/images/icon-error.svg"></img>
    </div>
    <p class="form__input-error">${errorMessage}</p>
  </div>
    `;

export default Input;
