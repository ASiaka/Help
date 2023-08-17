console.log("Select.js");

const arrayItems = [];

const response = document.querySelector(".form_response #response");
const contentMainWord = document.querySelector(".content_random_word");
const word = document.querySelector(".random_word");
const goodAnswer = document.querySelector(".good_response");
const validation = document.querySelector(".validation_word");
const success = document.querySelector(".success_word");
const failed = document.querySelector(".failed_word");
const category = document.querySelector("#category");

const buttonMenu = document.querySelector(".button_menu");
const buttonPlay = document.querySelector(".button_play");
const buttonMoins = document.querySelector(".button_moins");
const buttonPlus = document.querySelector(".button_plus");
const buttonList = document.querySelector(".button_list");

const addWordsCard = document.querySelector(".add_words_card_none");
const RemoveWordsCard = document.querySelector(".remove_words_card_none");
const listWordsCard = document.querySelector(".list_words_card_none");

const buttonAdd = document.querySelector(".button_add");
const buttonOui = document.querySelector(".button_oui");
const buttonNon = document.querySelector(".button_non");

let currentVocabulary = eval(category.value);