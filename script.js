console.log("Help");

const response = document.querySelector(".main_form #response");
const word = document.querySelector(".main_word");
const goodAnswer = document.querySelector(".main_response");
const validation = document.querySelector(".main_validation");
const success = document.querySelector(".main_success");
const failed = document.querySelector(".main_failed");
const button = document.querySelector(".main_button");
const category = document.querySelector("#category");

let currentVocabulary = eval(category.value);

let App = {
  init: function() {
    console.log(allCategories, theDays, theMonths, theNumbers);

    category.addEventListener('change', App.handleChooseCurrentVocabulary);
    button.addEventListener('click', App.handlePlayWords);
    response.addEventListener('input', App.handleValidation);
  },

  handleChooseCurrentVocabulary: function () {
    currentVocabulary = eval(category.value);
    console.log(currentVocabulary);
  },

  fr: function () {
    const fr = currentVocabulary.map(i => i.fr.toLowerCase());
    return fr
  },

  en: function () {
    const en = currentVocabulary.map(i => i.en.toLowerCase());
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
    const wordFind = currentVocabulary.find(i => {
      return (i.fr.toLowerCase() === word.textContent.toLowerCase() ||
              i.en.toLowerCase() === word.textContent.toLowerCase())
    });

    if (word.textContent.toLowerCase() === wordFind.en.toLowerCase() && response.value.toLowerCase() === wordFind.fr.toLowerCase()) {
      success.classList.add("success");
      failed.classList.remove("failed");

      goodAnswer.textContent = wordFind.fr;
      response.value = "";

      setTimeout(() => {
        App.handlePlayWords();
        success.classList.remove("success");
        goodAnswer.textContent = "";
      }, 1500);

    } else if (word.textContent.toLowerCase() === wordFind.fr.toLowerCase() && response.value.toLowerCase() === wordFind.en.toLowerCase()) {
        success.classList.add("success");
        failed.classList.remove("failed");

        goodAnswer.textContent = wordFind.en;
        response.value = "";

        setTimeout(() => {
          App.handlePlayWords();
          success.classList.remove("success");
          goodAnswer.textContent = "";
        }, 1500);

      } else {
          success.classList.remove("success");
          failed.classList.add("failed");
        }
  }

}

document.addEventListener('DOMContentLoaded', App.init);