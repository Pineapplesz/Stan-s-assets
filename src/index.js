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

//technologies Section
import technologiesSectionHtml from './template/TechnologiesSection.js';
document.querySelector('#technologiesSection-container').innerHTML = technologiesSectionHtml;

import LookingSectionHtml from './template/LookingSection.js';
document.querySelector('#lookingSection-container').innerHTML = LookingSectionHtml;


import('./scripts/burger-menu.js').then(() => {
});

import './scripts/swiper.js';
import './scripts/raiting-number.js';