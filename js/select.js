console.log("Select.js");

const arrayItems = [];

const response = document.querySelector(".main_form #response");
const contentMainWord = document.querySelector(".content_main_word");
const word = document.querySelector(".main_word");
const goodAnswer = document.querySelector(".main_response");
const validation = document.querySelector(".main_validation");
const success = document.querySelector(".main_success");
const failed = document.querySelector(".main_failed");
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