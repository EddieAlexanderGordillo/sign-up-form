import FormButton from "../FormButton/FormButtton";

const FormContainer = () =>
`<div class="form-container">
  <form id="form" action=""></form>
    ${FormButton()}
  <p class="disclaimer">
    By clicking the button, you are agreeing to our <a href="#">Terms and Services</a>
  </p>
</div>
`;

export default FormContainer;