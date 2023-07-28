console.log("Help");

let App = {
  init: function() {
    console.log(vocabulary, App.wordsTable());

    const button = document.querySelector(".main_button");
    button.addEventListener('click', App.handlePlayWords);
    let input = document.querySelector(".main_form #response");
    input.addEventListener('input', App.handleValidation);
  },

  fr: function () {
    const fr = vocabulary.map(i => i.fr.toLowerCase());
    return fr
  },

  en: function () {
    const en = vocabulary.map(i => i.en.toLowerCase());
    return en  },

  wordsTable: function () {
    const newArray = [];
    App.fr().map((i) => newArray.push(i));
    App.en().map((i) => newArray.push(i));
    return newArray
  },

  handlePlayWords: function () {
    let word = Math.round(Math.random() * App.wordsTable().length);
    let paragraph = document.querySelector(".word_paragraph");
    paragraph.classList.add("main_paragraph")
    paragraph.textContent = App.wordsTable()[word];
    document.querySelector(".main_form #response").value = "";
    document.querySelector(".main_form #response").focus();
  },

  handleValidation: function() {
    let inputValue = document.querySelector(".main_form #response").value.toLowerCase();
    const word = document.querySelector(".main_paragraph");
    const validation = document.querySelector(".validation_paragraph");
    if (inputValue === word.textContent) {
      console.log("Bravo");
      validation.textContent = "Bravo";
      validation.classList.add("bravo");
    }
    console.log(inputValue);
  }

}

document.addEventListener('DOMContentLoaded', App.init);