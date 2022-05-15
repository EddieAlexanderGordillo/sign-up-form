import Input from './components/input/Input';

window.addEventListener('load', () => {

    const form = document.getElementById('form');

    form.insertAdjacentHTML('beforeEnd', Input('first name'));
    form.insertAdjacentHTML('beforeEnd', Input('last name'));
});