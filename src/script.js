// import cards from './cards'
console.log(cards);
const category = cards[0];
const nav = document.querySelectorAll(".menu__item");
const cardText = document.querySelectorAll(".card__text");
for (let i = 0; i < category.length; i++) {
    nav[i + 1].text = category[i];
    cardText[i].textContent = category[i];
}
const actionA = cards[1]
for (let i = 0; i < actionA.length; i++) {

}
