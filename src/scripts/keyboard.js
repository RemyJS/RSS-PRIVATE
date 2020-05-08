function initKeyboard() {
  const keyboard = document.querySelector(".keyboard");
  const keybooardSwithcer = document.querySelector(".search__keyboard");
  const searchButton = document.querySelector(".search__button");
  const searchInput = document.querySelector(".search__input");

  const keyControls = ["ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight", "Backspace", "Tab", "CapsLock", "ShiftLeft", "ControlLeft", "MetaLeft",
    "AltLeft", "Space", "AltRight", "ControlRight", "ShiftRight", "Enter", "Delete", "Backspace"];

  const keyCodes = [
    ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
    ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete"],
    ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],
    ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"],
    ["MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"],
  ];

  const ruCaseUp = [
    ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del"],
    ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
    ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift"],
    ["RU", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
  ];
  const ruCaseDown = [
    ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del"],
    ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
    ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift"],
    ["RU", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
  ];
  const enCaseUp = [
    ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del"],
    ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter"],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "Shift"],
    ["ENG", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
  ];
  const enCaseDown = [
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
    ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift"],
    ["ENG", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
  ];

  function addKeys(row, n) {
    for (let i = 0; i < keyCodes[n].length; i += 1) {
      const key = document.createElement("div");
      key.classList.add("key");
      key.classList.add(keyCodes[n][i]);

      const ru = document.createElement("div");
      ru.classList.add("ru");

      const ruKeyCaseUp = document.createElement("div");

      ruKeyCaseUp.classList.add("caseUp");
      ruKeyCaseUp.innerText = ruCaseUp[n][i];
      ru.append(ruKeyCaseUp);

      const ruKeyCaseDown = document.createElement("div");
      ruKeyCaseDown.classList.add("caseDown");
      ruKeyCaseDown.innerText = ruCaseDown[n][i];
      ru.append(ruKeyCaseDown);


      const en = document.createElement("div");
      en.classList.add("en");

      const enKeyCaseUp = document.createElement("div");
      enKeyCaseUp.classList.add("caseUp");
      enKeyCaseUp.innerText = enCaseUp[n][i];
      en.append(enKeyCaseUp);

      const enKeyCaseDown = document.createElement("div");
      enKeyCaseDown.classList.add("caseDown");
      enKeyCaseDown.innerText = enCaseDown[n][i];
      en.append(enKeyCaseDown);

      key.append(ru);
      key.append(en);
      row.append(key);
    }
  }
  // add rows to keyboard

  for (let i = 0; i < 5; i += 1) {
    const row = document.createElement("div");
    row.className = "row";
    addKeys(row, i);
    keyboard.append(row);
  }

  // UpperCase and Language

  const enKeys = document.querySelectorAll(".en");
  const ruKeys = document.querySelectorAll(".ru");
  const upKeys = document.querySelectorAll(".caseUp");
  const downKeys = document.querySelectorAll(".caseDown");

  upKeys.forEach((el) => el.classList.toggle("hidden"));

  function changeLang() {
    let lang = localStorage.getItem("lang");
    if (!lang) lang = "ru";
    if (lang === "ru") {
      enKeys.forEach((el) => el.classList.remove("hidden"));
      ruKeys.forEach((el) => el.classList.add("hidden"));
      localStorage.setItem("lang", "en");
    } else {
      enKeys.forEach((el) => el.classList.add("hidden"));
      ruKeys.forEach((el) => el.classList.remove("hidden"));
      localStorage.setItem("lang", "ru");
    }
  }
  function hideLangKeys() {
    let lang = localStorage.getItem("lang");
    if (!lang) lang = "ru";
    if (lang === "ru") {
      enKeys.forEach((el) => el.classList.add("hidden"));
    } else {
      ruKeys.forEach((el) => el.classList.add("hidden"));
    }
  }
  hideLangKeys();

  function caps() {
    upKeys.forEach((el) => el.classList.toggle("hidden"));
    downKeys.forEach((el) => el.classList.toggle("hidden"));
  }
  // event

  function printKey(elem) {
    function findKey(el) {
      for (let i = 0; i < el.children.length; i += 1) {
        const str = el.children[i].classList.value;
        if (str.indexOf("hidden") === -1) {
          findKey(el.children[i]);
        }
      }
      return elem.innerText;
    }
    const key = elem.classList[1];

    if (keyControls.indexOf(elem.classList[1]) === -1) {
      const char = findKey(elem);
      searchInput.value += char;
    } else {
      switch (key) {
        case "Space":
          searchInput.value += " ";
          break;
        case "Backspace":
          searchInput.value = searchInput.value.slice(0, -1);
          break;
        case "Delete":
          searchInput.value = "";
          break;
        case "Enter":
          searchButton.dispatchEvent(new Event("click"));
          break;
        default:
          break;
      }
    }
  }

  keyboard.addEventListener("click", (event) => {
    const { target } = event;
    const key = target.closest(".key");
    if (key) {
      switch (key.classList[1]) {
        case "CapsLock":
          caps();
          break;
        case "ShiftLeft":
          caps();
          break;
        case "MetaLeft":
          changeLang();
          break;
        default:
          break;
      }
      printKey(key);
    }
  });

  keybooardSwithcer.addEventListener("click", () => {
    keyboard.classList.toggle("hidden");
  });
}
export { initKeyboard };
