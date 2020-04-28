console.log("slider init");
const multiItemSlider = (function () {
  return function (selector) {
    const slider = document.querySelector(selector); // основный элемент блока
    const sliderWrapper = slider.querySelector(".slider__wrapper"); // обертка для .slider-item
    const sliderItems = slider.querySelectorAll(".slider__item"); // элементы (.slider-item)
    const sliderControls = slider.querySelectorAll(".slider__control"); // элементы управления
    const wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width); // ширина обёртки
    const itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width); // ширина одного элемента
    let indexIndicator = 0;
    let maxIndexIndicator = sliderItems.length - 1;
    let indicatorItems = 0;
    let positionLeftItem = 0; // позиция левого активного элемента
    let transform = 0; // значение транфсофрмации .slider_wrapper
    const step = itemWidth / wrapperWidth * 100; // величина шага (для трансформации)
    const items = []; // массив элементов

    // наполнение массива items
    sliderItems.forEach((item, index) => {
      items.push({ item, position: index, transform: 0 });
    });

    const position = {
      getItemMin() {
        let indexItem = 0;
        items.forEach((item, index) => {
          if (item.position < items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getItemMax() {
        let indexItem = 0;
        items.forEach((item, index) => {
          if (item.position > items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getMin() {
        return items[position.getItemMin()].position;
      },
      getMax() {
        return items[position.getItemMax()].position;
      },
    };

    const transformItem = (direction) => {
      let nextItem = indexIndicator;
      let currentIndicator = indexIndicator;

      if (direction === "right") {
        positionLeftItem += 1;
        if ((positionLeftItem + wrapperWidth / itemWidth - 1) > position.getMax()) {
          nextItem = position.getItemMin();
          items[nextItem].position = position.getMax() + 1;
          items[nextItem].transform += items.length * 100;
          items[nextItem].item.style.transform = `translateX(${items[nextItem].transform}%)`;
        }
        transform -= step;
        indexIndicator += 1;
        if (indexIndicator > maxIndexIndicator) {
          indexIndicator = 0;
        }
      }
      if (direction === "left") {
        positionLeftItem -= 1;
        if (positionLeftItem < position.getMin()) {
          nextItem = position.getItemMax();
          items[nextItem].position = position.getMin() - 1;
          items[nextItem].transform -= items.length * 100;
          items[nextItem].item.style.transform = `translateX(${items[nextItem].transform}%)`;
        }
        transform += step;
        indexIndicator -= 1;
        if (indexIndicator < 0) {
          indexIndicator = maxIndexIndicator;
        }
      }
      sliderWrapper.style.transform = `translateX(${transform}%)`;
      indicatorItems[currentIndicator].classList.remove("active");
      indicatorItems[indexIndicator].classList.add("active");
    }


    // обработчик события click для кнопок "назад" и "вперед"
    const controlClick = (e) => {
      if (e.target.classList.contains("slider__control")) {
        e.preventDefault();
        const direction = e.target.classList.contains("slider__control_right") ? "right" : "left";
        transformItem(direction);
      }
    };

    const setUpListeners = () => {
      // добавление к кнопкам "назад" и "вперед" обрботчика controlClick для событя click
      sliderControls.forEach((item) => {
        item.addEventListener("click", controlClick);
      });
    };

    // инициализация
    const addIndicators = () => {
      const sliderIndicators = document.createElement("ul");
      sliderIndicators.classList.add("slider__indicators");
      for (let i = 0; i < sliderItems.length; i += 1) {
        const sliderIndicatorsItem = document.createElement("li");
        if (i === 0) {
          sliderIndicatorsItem.classList.add("active");
        }
        sliderIndicators.appendChild(sliderIndicatorsItem);
      }
      slider.appendChild(sliderIndicators);
      indicatorItems = slider.querySelectorAll(".slider__indicators > li");
    }

    // добавляем индикаторы
    addIndicators();
    setUpListeners();

    return {
      right() { // метод right
        transformItem("right");
      },
      left() { // метод left
        transformItem("left");
      },
    };
  };
}());

const slider = multiItemSlider(".slider");

