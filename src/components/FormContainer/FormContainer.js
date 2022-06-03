import FormButton from '../FormButton/FormButtton';
import Input from '../input/input';
import validateForm from '../FormValidation/FormValidation';

const FormContainer = () => {
  return `<div class="form-container">
    <form id="form" action="" >
      ${Input({
        errorMessage: 'First Name cannot be empty',
        placeholder: 'First Name',
        field: 'firstName',
      })}  
      ${Input({
        errorMessage: 'Last Name cannot be empty',
        placeholder: 'Last Name',
        field: 'lastName',
      })}  
      ${Input({
        errorMessage: 'Looks like this not an email ',
        type: 'email',
        placeholder: 'Email Address',
        field: 'emailAddress',
      })}  
      ${Input({
        errorMessage: 'Password cannot be empty',
        type: 'password',
        placeholder: 'Password',
        field: 'password',
      })}  
     ${FormButton({ onsubmit: validateForm })}
    </form>
    <p class="disclaimer">
      By clicking the button, you are agreeing to our <a href="#">Terms and Services</a>
    </p>
  </div>
  `;
};

export default FormContainer;
