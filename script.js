console.log("Help");

const response = document.querySelector(".main_form #response");
const word = document.querySelector(".main_word");
const validation = document.querySelector(".main_validation");
const success = document.querySelector(".main_success");
const failed = document.querySelector(".main_failed");
const button = document.querySelector(".main_button");

let App = {
  init: function() {
    console.log(vocabulary);

    button.addEventListener('click', App.handlePlayWords);
    response.addEventListener('input', App.handleValidation);
  },

  fr: function () {
    const fr = vocabulary.map(i => i.fr.toLowerCase());
    return fr
  },

  en: function () {
    const en = vocabulary.map(i => i.en.toLowerCase());
    return en  },

  wordsArray: function () {
    const newArray = [];
    App.fr().map((i) => newArray.push(i));
    App.en().map((i) => newArray.push(i));
    return newArray
  },

  handlePlayWords: function () {
    let wordIndex = Math.round(Math.random() * App.wordsArray().length);
    word.classList.add("main_word_style");
    word.textContent = App.wordsArray()[wordIndex];
    response.value = "";
    response.focus();
  },

  handleValidation: function() {
    const wordFilter = vocabulary.filter(i => {
      if (response.value.toLowerCase() === word.textContent.toLowerCase() || response.value.toLowerCase() === word.textContent.toLowerCase()) {
        return i.fr.toLowerCase() === word.textContent.toLowerCase() || i.en.toLowerCase() === word.textContent.toLowerCase()
      }
    });
    const goodAnswer = wordFilter.find(i => {
      if (response.value.toLowerCase() === i.fr.toLowerCase()) {
        console.log(i.en);
        return i.en
      }
      if (response.value.toLowerCase() === i.en.toLowerCase()) {
        console.log(i.fr);
        return i.fr
      }
    })

    console.log(wordFilter, goodAnswer);
    if (response.value === word.textContent) {
      success.classList.add("success");
      failed.classList.remove("failed");
    } else {
      success.classList.remove("success");
      failed.classList.add("failed");
    }
  }

}

document.addEventListener('DOMContentLoaded', App.init);