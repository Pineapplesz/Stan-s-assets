import './index.scss';


import headerHtml from './template//Header.js';
document.querySelector('#header-container').innerHTML = headerHtml;

import('./scripts/burger-menu.js').then(() => {
});