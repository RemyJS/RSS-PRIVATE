//import {search} from "./search.js";
console.log("slider init");
const multiItemSlider = (function () {
  return function (selector, movieTitle, lastPage) {
    const slider = document.querySelector(selector); // основный элемент блока
    const sliderWrapper = slider.querySelector(".slider__wrapper"); // обертка для .slider-item
    const sliderItems = slider.querySelectorAll(".slider__item"); // элементы (.slider-item)
    const sliderControls = slider.querySelectorAll(".slider__control"); // элементы управления
    const sliderControlLeft = slider.querySelector(".slider__control_left"); // кнопка "LEFT"
    const sliderControlRight = slider.querySelector(".slider__control_right"); // кнопка "RIGHT"
    // eslint-disable-next-line prefer-const
    let wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width); // ширина обёртки
    // eslint-disable-next-line prefer-const
    let itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width); // ширина одного элемента
    let positionLeftItem = 0; // позиция левого активного элемента
    let transform = 0; // значение трансформации .slider_wrapper
    let step = itemWidth / wrapperWidth * 100; // величина шага (для трансформации)
    let pageForSearch = 1;
    const items = []; // массив элементов

    // наполнение массива items
    sliderItems.forEach((elem, index) => {
      items.push({ item: elem, position: index, transform: 0 });
    });

    const position = {
      getMin: 0,
      get getMax() {
        return items.length - 1;
      },
    };
    const loadExtraPage = function (newPage) {
      console.log(`Поиск страницы ${newPage} по запросу ${movieTitle}`);
      const movies = search(movieTitle, newPage);

      movies.then(() => {
        const newSliderItem = document.querySelectorAll(".slider__item");
        let push = items.length;
        for (push; push < newSliderItem.length; push += 1) {
          items.push({ item: newSliderItem[push], position: push, transform: 0 });
        }
      });

    }
    const transformItem = function (direction) {
      if (direction === "right") {
        if ((positionLeftItem + wrapperWidth / itemWidth - 1) >= position.getMax) {
          return;
        }
        if (!sliderControlLeft.classList.contains("slider__control_show")) { // first click to right
          sliderControlLeft.classList.add("slider__control_show");
        }
        if (sliderControlRight.classList.contains("slider__control_show") && (positionLeftItem + wrapperWidth / itemWidth) >= position.getMax) {
          if (pageForSearch < lastPage) {
            pageForSearch += 1;
            loadExtraPage(pageForSearch);
          } else {
            sliderControlRight.classList.remove("slider__control_show"); // hide right arrow in the last slide
          }
        }
        positionLeftItem += 1;
        transform -= step;
      }
      if (direction === "left") {
        if (positionLeftItem <= position.getMin) {
          return;
        }
        if (!sliderControlRight.classList.contains("slider__control_show")) {
          sliderControlRight.classList.add("slider__control_show");
        }
        if (sliderControlLeft.classList.contains("slider__control_show") && positionLeftItem - 1 <= position.getMin) {
          sliderControlLeft.classList.remove("slider__control_show");
        }
        positionLeftItem -= 1;
        transform += step;
      }
      sliderWrapper.style.transform = `translateX(${transform}%)`;
    }

    // обработчик события click для кнопок "назад" и "вперед"
    const controlClick = function (e) {
      if (e.target.classList.contains("slider__control")) {
        e.preventDefault();
        const direction = e.target.classList.contains("slider__control_right") ? "right" : "left";
        transformItem(direction);
      }
    };

    const setUpListeners = function () {
      sliderControls.forEach((item) => {
        item.removeEventListener("click", controlClick);
      });
      // добавление к кнопкам "назад" и "вперед" обработчика controlClick для события click
      sliderControls.forEach((item) => {
        item.addEventListener("click", controlClick);
      });
    }

    // инициализация
    setUpListeners();

    return {
      right() { // метод right
        transformItem("right");
      },
      left() { // метод left
        transformItem("left");
      },
      position,
      items,
    };

  };
}());

let slider;//= multiItemSlider(".slider", 0, 3);

//export {multiItemSlider};
