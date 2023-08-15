console.log("Help");

const arrayItems = [];

const response = document.querySelector(".main_form #response");
const contentMainWord = document.querySelector(".content_main_word");
const word = document.querySelector(".main_word");
const goodAnswer = document.querySelector(".main_response");
const validation = document.querySelector(".main_validation");
const success = document.querySelector(".main_success");
const failed = document.querySelector(".main_failed");
const button = document.querySelector(".main_button");
const category = document.querySelector("#category");
const addButton = document.querySelector(".add_word");
const addForm = document.querySelector(".add_form_none");
const submitWord = document.querySelector(".submit_word");
const clearWords = document.querySelector(".supp_words");
const listButton = document.querySelector(".list_words");
const listWords = document.querySelector(".list_none");

let currentVocabulary = eval(category.value);

let App = {
  init: function() {
    console.log(allCategories, theDays, theMonths, theNumbers);

    // App.seeTheResponse();
    App.seeTheResponseButton();

    category.addEventListener('change', App.handleChooseCurrentVocabulary);
    button.addEventListener('click', App.handlePlayWords);
    // App.seeTheResponse();
    response.addEventListener('input', App.handleValidation);

    addButton.addEventListener('click', () => {
      console.log('addWord Ok');
      listWords.classList.remove("list");
      addForm.classList.toggle("add_form");

      let enWord = document.querySelector("#en");
      let frWord = document.querySelector("#fr");
      if (en.value.trim() === "") {
        console.log("en empty");
        enWord.focus()
      } else if (fr.value.trim() === "") {
          console.log("fr empty");
          frWord.focus()
        }
    });
    addForm.addEventListener('submit', App.handleAddWord);
    StorageItems.handlePushItems();
    clearWords.addEventListener('click', () => {
      console.log('suppWord Ok');

      listWords.classList.remove("list");
      addForm.classList.remove("add_form");

      StorageItems.handleClearItems();
    });
    console.log(arrayItems);
    listButton.addEventListener('click', App.handleWordsList)

    // App.handleRemoveWord();
  },

  handleChooseCurrentVocabulary: function () {
    currentVocabulary = eval(category.value);
    App.handlePlayWords();
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

  wordFind: function() {
    const find = currentVocabulary.find(i => {
      return (i.fr.toLowerCase() === word.textContent.toLowerCase() ||
              i.en.toLowerCase() === word.textContent.toLowerCase())
    });
    console.log(find);
    return find
  },

  handlePlayWords: function () {
    listWords.classList.remove("list");
    addForm.classList.remove("add_form");

    let wordIndex = Math.round(Math.random() * (App.wordsArray().length - 1));
    word.classList.add("main_word_style");
    word.textContent = App.wordsArray()[wordIndex];
    response.value = "";
    response.focus();

    const eyesButton = document.querySelector(".span_button_none");
    eyesButton.classList.add("span_button");

    App.seeTheResponse();
  },

  seeTheResponseButton: function () {
    let spanButton = document.createElement('button');
    spanButton.textContent = "?";
    spanButton.className = "span_button_none";
    contentMainWord.append(spanButton);

    let spanResponse = document.createElement('span');
    // spanResponse.textContent = "That's Ok";
    spanResponse.className = "span_response_none";
    contentMainWord.append(spanResponse);

    spanButton.addEventListener('click', () => {
      spanResponse.classList.toggle("span_response");
    })
  },

  seeTheResponse: function() {

    console.log(App.wordFind());
    let spanResponse = document.querySelector('.span_response_none');

    if (word.textContent.toLowerCase() === App.wordFind().en.toLowerCase()) {
      spanResponse.textContent = App.wordFind().fr;
    } else if (word.textContent.toLowerCase() === App.wordFind().fr.toLowerCase()) {
        spanResponse.textContent = App.wordFind().en;
      } else {
          spanResponse.textContent = "";
        }
  },

  handleValidation: function() {

    if (word.textContent.toLowerCase() === App.wordFind().en.toLowerCase() && response.value.toLowerCase() === App.wordFind().fr.toLowerCase()) {
      success.classList.add("success");
      failed.classList.remove("failed");

      goodAnswer.textContent = App.wordFind().fr;
      response.value = "";

      setTimeout(() => {
        App.handlePlayWords();
        success.classList.remove("success");
        goodAnswer.textContent = "";
      }, 1500);

    } else if (word.textContent.toLowerCase() === App.wordFind().fr.toLowerCase() && response.value.toLowerCase() === App.wordFind().en.toLowerCase()) {
        success.classList.add("success");
        failed.classList.remove("failed");

        goodAnswer.textContent = App.wordFind().en;
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
  },

  handleAddWord: function (e) {
    e.preventDefault();
    console.log("submit Ok");

    let enWord = document.querySelector("#en");
    let frWord = document.querySelector("#fr");

    if (en.value.trim() !== "" && fr.value.trim() !== "") {
      console.log("is not empty");
      const objectItems = {en: enWord.value, fr: frWord.value, key: localStorage.length+1}
      StorageItems.handleSetItem(localStorage.length+1, objectItems);
      StorageItems.handlePushItems();
      enWord.value = "";
      frWord.value = "";
      enWord.focus();
    } else {
      if (en.value.trim() === "") {
        console.log("en empty");
        enWord.focus()
      }
      if (fr.value.trim() === "") {
        console.log("fr empty");
        frWord.focus()
      }
      if (en.value.trim() === "" & fr.value.trim() === "") {
        console.log("en & fr empty");
        enWord.focus()
      }
    }
  },

  // handleRemoveWord: function (e) {  
  //   const currentWord = document.querySelector(".words");

  //   console.log(localStorage.key(1), localStorage.getItem(2), currentWord);
  // },

  wordsList: function (en, fr, backgroundGray) {
    let words = document.querySelector(".words");
    let word = document.createElement('div');
    word.classList.add("word", backgroundGray);
    let listEn = document.createElement('p');
    let listFr = document.createElement('p');
    listEn.textContent = en;
    listFr.textContent = fr;

    word.append(listEn, listFr);
    words.append(word);
  },

  handleWordsList: function () {
    // console.log("list", listWords);
    // let word = document.querySelector(".word");
    let words = document.querySelector(".words");
    while (words.firstChild) {
      words.removeChild(words.firstChild);  
    }

    addForm.classList.remove("add_form");
    listWords.classList.toggle("list");
    
    for (let index = 0; index < arrayItems.length; index++) {
      let backgroundGray = "backgroung_white";
      if (index % 2) {
        backgroundGray = "backgroung_gray"
      }
      App.wordsList(arrayItems[index].en, arrayItems[index].fr, backgroundGray);
    }
  }

}

document.addEventListener('DOMContentLoaded', App.init);