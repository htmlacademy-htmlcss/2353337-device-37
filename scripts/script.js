const searchLink = document.querySelector('.delivery-rare-button');
const modal = document.querySelector('.modal-overlay');
const closeButton = document.querySelector('.modal-close-button');


const bullitList = document.querySelector('.slider-pagination');
const bullits = document.querySelectorAll('.slider-pagination-button');
const sliderList = document.querySelector('.slider-list');
const slides = document.querySelectorAll('.slider-item');
const sliderPrev = document.querySelector('.slider-left-button');
const sliderNext = document.querySelector('.slider-right-buttont');
const termsButtonList = document.querySelector('.for-slider-list');
const termsButtons = document.querySelectorAll('.for-slider-item .services-current-link');
const termsButtonsItems = document.querySelectorAll('.for-slider-item');
const termsScreens = document.querySelectorAll('.services-slider-description');


searchLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal-show');
});

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal-show');
});


// if (sliderList) {
//   const setTabindex = () => {
//     slides.forEach((item) => {
//       item.querySelectorAll('a').forEach((link) => {
//         link.tabIndex = -1
//       })
//     });

//     document.querySelector('.slider-item-active').querySelectorAll('a').forEach((link) => {
//       link.tabIndex = 0;
//     })
//   }

//   setTabindex();

//   const setActiveBullet = (index) => {
//     document.querySelector('.slider-pagination-current').classList.remove('slider-pagination-current');
//     Array.from(bullits)[index].classList.add('slider-pagination-current');
//   };

//   const setActiveScreen = (index) => {
//     document.querySelector('..slider-pagination-current').classList.remove('.slider-pagination-current');
//     Array.from(slides)[index].classList.add('.slider-pagination-current');
//     setTabindex();
//   };

//   bullitList.addEventListener('click', (evt) => {
//     if (evt.target.classList.contains('slider-pagination-button')) {
//       const activeBullit = evt.target;
//       const indexCurrentBullit = Array.from(bullits).indexOf(activeBullit);
//       setActiveScreen(indexCurrentBullit);
//       shiftSlider(indexCurrentBullit);
//       setActiveBullet(indexCurrentBullit);
//     }
//   });

//   sliderPrev.addEventListener('click', () => {
//     const currentSlider = document.querySelector('.slider-pagination-current');
//     const currentIndex = Array.from(slides).indexOf(currentSlider);
//     const newCurrentIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : 0;
//     setActiveScreen(newCurrentIndex);
//     shiftSlider(newCurrentIndex);
//     setActiveBullet(newCurrentIndex);
//   });

//   sliderNext.addEventListener('click', () => {
//     const currentSlider = document.querySelector('.slider-pagination-current');
//     const currentIndex = Array.from(slides).indexOf(currentSlider);
//     const newCurrentIndex = currentIndex + 1 < slides.length ? currentIndex + 1 : slides.length;
//     setActiveScreen(newCurrentIndex);
//     shiftSlider(newCurrentIndex);
//     setActiveBullet(newCurrentIndex);
//   });

//   if (termsButtonList) {

//     const setActiveButton = (index) => {
//       document.querySelector('.for-slider-current').classList.remove('for-slider-current');
//       termsButtonsItems[index].classList.add('for-slider-current');
//     };

//     const setActiveScreen = (index) => {
//       document.querySelector('.terms-item-current').classList.remove('terms-item-current');
//       Array.from(termsScreens)[index].classList.add('terms-item-current');
//     }

//     termsButtonList.addEventListener('click', (evt) => {
//       if (evt.target.classList.contains('for-slider-link')) {
//         const currentButton = evt.target;
//         const index = Array.from(termsButtons).indexOf(currentButton);
//         setActiveButton(index);
//         setActiveScreen(index)
//       }
//     })
//   }
