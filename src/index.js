import './index.scss';

//header
import headerHtml from './template/Header.js';
document.querySelector('#header-container').innerHTML = headerHtml;
//footer
import footerHtml from './template/Footer.js';
document.querySelector('#footer-container').innerHTML = footerHtml;

import('./scripts/burger-menu.js').then(() => {
});