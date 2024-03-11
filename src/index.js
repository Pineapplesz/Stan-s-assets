import './index.scss';
import './index.html';

//header
import headerHtml from './template/Header.js';
document.querySelector('#header-container').innerHTML = headerHtml;

//footer
import footerHtml from './template/Footer.js';
document.querySelector('#footer-container').innerHTML = footerHtml;

//socials
import socialsHtml from './template/Socials.js';
document.querySelector('#socials-container').innerHTML = socialsHtml;

//Focus Section
import technologiesSectionHtml from './template/FocusSection.js';
document.querySelector('#technologiesSection-container').innerHTML = technologiesSectionHtml;

import('./scripts/burger-menu.js').then(() => {
});

import './scripts/swiper.js';
import './scripts/raiting-number.js';