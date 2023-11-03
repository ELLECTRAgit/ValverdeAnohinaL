// Слайдер
// видимая часть слайдера
let viewport = document.getElementById('viewport').offsetWidth;
// кнопка вперед и назад
let btnNext = document.querySelector('.slider__control-next');
let btnPrev = document.querySelector('.slider__control-prev');
// слайдер со слайдами
let slider = document.querySelector('div.slider');
// получаем элементы для показа слайда
let viewSlidesOne = document.getElementById('viewSliderOne');
//объявляем переменную для номера слайда и инициализации (запуска)
let viewSlide = 0;

// обработка клика на кнопку Вперед
btnNext.addEventListener('click', function() {
        if (viewSlide<(viewSlidesOne.children.length-1)) {
        viewSlide++;
    } else {viewSlide = 0;
    }
    // меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + 'px';
});

// обработка клика на кнопку Назад
btnPrev.addEventListener('click', function() {
    viewSlidesOne.children[viewSlide].style.backgroundColor = 'white'; 
    if (viewSlide>0) {
        viewSlide--;
    } else {viewSlide=(viewSlidesOne.children.length-1);
    }
    slider.style.left = -viewSlide * viewport + 'px';
});

