//import cards from './assets/cards'
console.log(cards);
const category = cards[0];
const nav = document.querySelectorAll(".nav_item");

for(let i = 0; i < category.length; i++){
    nav[i].text = category[i];
}
function hi (){
    console.log("hi");
}