import logo from '../assets/img/icons/logo.svg'
const headerHtml = `
<header>
    <div class="header header__container-big">
        <a href="" class="header__logo"><img src="${logo}" alt="logo"></a>
        <div class="header__menu menu">
            <nav class="menu__body">
                <ul class="menu__list">
                    <li class="menu__item"><a href="" class="menu__link">SERVICES</a></li>
                    <li class="menu__item"><a href="" class="menu__link">TECHNOLOGIES</a></li>
                    <li class="menu__item"><a href="" class="menu__link">PRODUCTS</a></li>
                    <li class="menu__item"><a href="" class="menu__link">PORTFOLIO</a></li>
                    <li class="menu__item"><a href="" class="menu__link">BLOG</a></li>
                    <li class="menu__item"><a href="" class="menu__link">ABOUT US</a></li>
                </ul>
            </nav>
            <a href="" class="button-white">CONTACT US</a>
        </div>

        <nav class="burger-navigation">
            <div class="burger-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </div>
</header>
`;

export default headerHtml;