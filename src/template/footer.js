import logo from '../assets/img/icons/logo.svg'
import facebook from '../assets/img/footer/socials/f.svg'
import linkedin from '../assets/img/footer/socials/in.svg'
import telephone from '../assets/img/footer/socials/tel.svg'
import skype from '../assets/img/footer/socials/skype.svg'
import github from '../assets/img/footer/socials/github.svg'

const footerHtml = `
<footer>
<div class="footer">
    <div class="footer__container-big">
        <div class="footer-socials">
            <a href="" class="footer-socials__logo"><img src="${logo}" alt="logo"></a>
            <div class="footer-socials__items">
                <a href="" class="footer-socials__item"><img src="${facebook}"
                    alt="facebook"></a>
                <a href="" class="footer-socials__item"><img src="${linkedin}"
                    alt="linkedin"></a>
                <a href="" class="footer-socials__item"><img src="${telephone}"
                    alt="telephone"></a>
                <a href="" class="footer-socials__item"><img src="${skype}"
                    alt="skype"></a>
                <a href="" class="footer-socials__item"><img src="${github}"
                    alt="github"></a>
            </div>
        </div>
        <div class="footer-services">
            <a href="" class="footer-services__text">Services</a>
            <div class="footer-services__items">
                <a href='' class="footer-services__item">Mobile Application Development</a>
                <a href='' class="footer-services__item">Game Development Outsourcing</a>
                <a href='' class="footer-services__item">VR App Development</a>
                <a href='' class="footer-services__item">Dedicated Developers</a>
                <a href='' class="footer-services__item">SDK Development</a>
                <a href='' class="footer-services__item">3D Modeling services</a>
            </div>
        </div>
        <div class="footer-technologies">
            <a href="" class="footer-technologies__text">Technologies </a>
            <div class="footer-technologies__items">
                <a href='' class="footer-technologies__item">Android</a>
                <a href='' class="footer-technologies__item">IOS</a>
                <a href='' class="footer-technologies__item">Unity</a>
            </div>
        </div>
        <div class="footer-products">
            <a href="" class="footer-products__text">products</a>
            <a href="" class="footer-products__text">Portfolio</a>
            <a href="" class="footer-products__text">Blog</a>
        </div>
        <div class="footer-about">
            <a href="" class="footer-about__text">About us</a>
            <div class="footer-about__items">
                <a href='' class="footer-about__item">Contacts</a>
                <a href='' class="footer-about__item">Team</a>
                <a href='' class="footer-about__item">Join the Team</a>
            </div>
        </div>
    </div>
</div>
<div class="footer-bottom footer-bottom__container-big">
    <div class="footer-bottom__right">© 2021 - Stan’s Assets. All Right Reserved</div>
    <div class="footer-bottom__items">
        <a href='' class="footer-bottom__item">Privacy policy</a>
        <a href='' class="footer-bottom__item">Cookies policy</a>
    </div>
</div>
</footer>
`;

export default footerHtml;