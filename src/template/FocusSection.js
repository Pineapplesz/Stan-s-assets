import clutchLogo from '../assets/img/home/technologies/Clutch-logo.svg'
import android from '../assets/img/home/technologies/apps/android.svg'
import apple from '../assets/img/home/technologies/apps/apple.svg'
import unity from '../assets/img/home/technologies/apps/unity.svg'



const technologiesSectionHtml = `
<section><!--Technologies-->
<div class="technologies technologies__container">
    <div class="technologies__content technologies-content">
        <div class="technologies-content__title">Technologies</div>
        <p class="technologies-content__text">
            <span class="technologies-content__text-blue">Stan’s</span> <span
                class="technologies-content__text-DarkBlue">Assets</span> is a team of developers that
            are
            committed to developing high quality and engaging entertainment software
        </p>
        <div class="technologies-content__apps technologies-content-apps">
            <a href="" class="technologies-content-apps__item technologies-content-apps__item-1"><img src="${android}" alt="android"></a>
            <a href="" class="technologies-content-apps__item technologies-content-apps__item-2"><img src="${apple}" alt="apple"></a>
            <a href="" class="technologies-content-apps__item technologies-content-apps__item-3"><img src="${unity}" alt="unity"></a>
        </div>
        <p class="technologies-content__subtext">Our engineers develop applications for the most popular
            platforms.</p>
    </div>
    <div class="technologies__raiting technologies-raiting">
        <a href="" class="technologies-raiting__logo"><img src="${clutchLogo}" alt="logo"></a>
        <div class="technologies-raiting__content">
            <div class="technologies-raiting__content__number">4.5</div>
            <fieldset class="rating">
                <input type="radio" id="star5" name="rating" value="5" /><label class="full" for="star5"
                    title="Awesome - 5 stars"></label>
                <input type="radio" id="star4half" name="rating" value="4.5" checked /><label
                    class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                <input type="radio" id="star4" name="rating" value="4" /><label class="full" for="star4"
                    title="Pretty good - 4 stars"></label>
                <input type="radio" id="star3half" name="rating" value="3.5" /><label
                    class="half" for="star3half" title="Meh - 3.5 stars"></label>
                <input type="radio" id="star3" name="rating" value="3" /><label class="full" for="star3"
                    title="Meh - 3 stars"></label>
                <input type="radio" id="star2half" name="rating" value="2.5" /><label
                    class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                <input type="radio" id="star2" name="rating" value="2" /><label class="full" for="star2"
                    title="Kinda bad - 2 stars"></label>
                <input type="radio" id="star1half" name="rating" value="1.5" /><label
                    class="half" for="star1half" title="Meh - 1.5 stars"></label>
                <input type="radio" id="star1" name="rating" value="1" /><label class="full" for="star1"
                    title="Sucks big time - 1 star"></label>
                <input type="radio" id="starhalf" name="rating" value="0.5" /><label class="half"
                    for="starhalf" title="Sucks big time - 0.5 stars"></label>
            </fieldset>
        </div>
        <a href="" class="button-lightGreen">Check out reviews</a>
    </div>
</div>
</section>
`;

export default technologiesSectionHtml;

