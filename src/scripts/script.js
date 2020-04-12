// import cards from './cards'
console.log(cards);
const main = document.querySelector('main');
const category = cards[0];
const nav = document.querySelectorAll(".menu__item");
const toogle = document.querySelector(".switch input");
for (let i = 0; i < category.length; i += 1) {
    nav[i + 1].text = category[i];
    nav[i + 1].href = `#${category[i]}`;
};
toogle.addEventListener("click", () => {
    const list = document.querySelector(".menu__list");
    const mainCard = document.querySelectorAll(".card_main");
    if (toogle.checked) {
        list.classList.remove("green_nav");
        if (mainCard) {
            mainCard.forEach((card) => card.classList.remove("green_main"));
        }
    } else {
        list.classList.add("green_nav");
        if (mainCard) {
            mainCard.forEach((card) => card.classList.add("green_main"));
        }
    }
});