// модальное окно
const deliveryLink = document.querySelector('.delivery-rare-button');
const modal = document.querySelector('.modal-overlay');
const closeButton = document.querySelector('.modal-close-button');

// слайдер с товаром, верхний
// список кружочков, булитов - список ol/ul
const bullitList = document.querySelector('.slider-pagination');
// // сами кнопки, каждый
const bullits = document.querySelectorAll('.slider-pagination-button');
// список слайдов
const sliderList = document.querySelector('.slider-list');
// экраны, каждый - li
const slides = document.querySelectorAll('.slider-item');
//для кнопок лево-право
const sliderPrev = document.querySelector('.slider-left-button');
const sliderNext = document.querySelector('.slider-right-button');


const termsButtonList = document.querySelector('.for-slider-list');
const termsButtons = document.querySelectorAll('.for-slider-item .for-slider-btn');
const termsButtonsItems = document.querySelectorAll('.for-slider-item');
const termsScreens = document.querySelectorAll('.services-slider-description');


// модальное окно
if (deliveryLink) {
  deliveryLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal-show');
  });

  closeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal-show');
  });
}

// слайдер с товаром (верхний)

// //управлкние последовательностью таба по сайту
if (sliderList) {
  const setTabindex = () => {
    slides.forEach((item) => {
      item.querySelectorAll('a').forEach((link) => {
        link.tabIndex = -1
      })
    });

    document.querySelector('.slider-item-active').querySelectorAll('a').forEach((link) => {
      link.tabIndex = 0;
    })
  }

  setTabindex();

  // функция для Действия 3
  const setActiveBullet = (index) => {
    // убираем класс активности с активного булита
    document.querySelector('.slider-pagination-current').classList.remove('slider-pagination-current');
    // добавляем класс активности новому активному булиту
    Array.from(bullits)[index].classList.add('slider-pagination-current');
  };

  // функция для Действия 2  - передвигаем слайд
  const shiftSlider = (index) => {
    sliderList.style.transform = `translateX(${-1160 * index}px)`;
  };

  // функция для Действия 3  - меняем классы активности у li - экраны
  const setActiveScreen = (index) => {
    document.querySelector('.slider-item-active').classList.remove('.slider-item-active');
    Array.from(slides)[index].classList.add('.slider-item-active');

    setTabindex();
  };

  //  слушаем клик по булитам наивгации
  bullitList.addEventListener('click', (evt) => {
    // проверяем клик именно по кнопке а не вообще по списку
    if (evt.target.classList.contains('slider-pagination-button')) {
      // назвали булит по которому кликнули
      const activeBullit = evt.target;
      //назвали номер(индекс) активного булита
      const indexCurrentBullit = Array.from(bullits).indexOf(activeBullit);
      console.log('ok', evt.target);
      //Действие 1 присвоили класс активности активному экрану
      setActiveScreen(indexCurrentBullit);

      //Действие 2 сдвигаем экран - формула
      shiftSlider(indexCurrentBullit);

      //Действие 3 присвоили класс активности активному булиту
      setActiveBullet(indexCurrentBullit);
    }
  });

  // кнопка влево (предыдущий)
  sliderPrev.addEventListener('click', () => {
    const currentSlider = document.querySelector('.slider-item-active');
    const currentIndex = Array.from(slides).indexOf(currentSlider);
    const newCurrentIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : 0;
    setActiveScreen(newCurrentIndex);
    shiftSlider(newCurrentIndex);
    setActiveBullet(newCurrentIndex);
  });
  // кнопка вправо(следующий)
  sliderNext.addEventListener('click', () => {
    const currentSlider = document.querySelector('.slider-item-active');
    const currentIndex = Array.from(slides).indexOf(currentSlider);
    const newCurrentIndex = currentIndex + 1 < slides.length ? currentIndex + 1 : slides.length;
    setActiveScreen(newCurrentIndex);
    shiftSlider(newCurrentIndex);
    setActiveBullet(newCurrentIndex);
  });
}


if (termsButtonList) {

  const setActiveButton = (index) => {
    document.querySelector('.for-slider-current').classList.remove('for-slider-current');
    termsButtonsItems[index].classList.add('for-slider-current');
  };

  const setActiveScreen = (index) => {
    document.querySelector('.services-slider-active').classList.remove('services-slider-active');
    Array.from(termsScreens)[index].classList.add('services-slider-active');
  }

  termsButtonList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('for-slider-btn')) {
      const currentButton = evt.target;
      const index = Array.from(termsButtons).indexOf(currentButton);
      setActiveButton(index);
      setActiveScreen(index)
    }
  })
}
