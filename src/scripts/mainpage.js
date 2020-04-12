function createMain() {
  const container = document.createElement("div");
  container.className = "main-page";

  for (let i = 0; i < category.length; i += 1) {
    const a = document.createElement("a");
    const img = document.createElement("img");
    const span = document.createElement("span");
    //add class
    a.className = "card card_main";
    span.className = "card__text";
    img.alt = "card";
    img.src = cards[i+1][0].image;
    span.textContent = category[i];
    
    a.append(img);
    a.append(span);
    container.append(a);
  }
  main.append(container);
  return container;
}
