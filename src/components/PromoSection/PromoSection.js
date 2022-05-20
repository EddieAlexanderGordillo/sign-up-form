import FormContainer from '../FormContainer/FormContainer';

const PromoSection = () => `
<section>
  <div class="promo">
    <p class="promo__text"> <span class="promo__span">Try it free 7 days</span> then $20/mo.thereafter</p>
  </div>
  ${FormContainer()}
</section>
`;

export default PromoSection;