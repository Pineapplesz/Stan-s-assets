document.addEventListener('DOMContentLoaded', function () {
    const ratingInputs = document.querySelectorAll('.rating input');
    const ratingNumberElement = document.querySelector('.technologies-raiting__content__number');

    ratingInputs.forEach(function (input) {
        input.addEventListener('change', function () {

            localStorage.setItem(this.name, this.value);

            updateRatingNumber();
        });
    });

    // Функция для обновления значения в .technologies-raiting__content__number
    function updateRatingNumber() {
        const checkedInput = document.querySelector('.rating input:checked');
        if (checkedInput) {
            ratingNumberElement.textContent = checkedInput.value;
        } else {
            // Если ни одна звезда не выбрана, устанавливаем значение по умолчанию
            ratingNumberElement.textContent = '0';
        }
    }

    updateRatingNumber();
});