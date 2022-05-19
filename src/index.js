import PromoSection from './components/PromoSection/PromoSection';
import InfoSection from './components/InfoSection/InfoSection';

import './styles/styles.css';
import './styles/desktop.css'

window.addEventListener('load', () => {

    const main = document.getElementById('main');

    main.insertAdjacentHTML('beforeEnd', InfoSection());
    main.insertAdjacentHTML('beforeEnd', PromoSection());
});