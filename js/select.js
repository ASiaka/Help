console.log("Select.js");

const formResponse = document.querySelector(".form_response");
const response = document.querySelector("#response");

const validationWord = document.querySelector(".validation_word");
const goodResponse = document.querySelector(".good_response");
const successWord = document.querySelector(".success_word");
const failedWord = document.querySelector(".failed_word");

const contentRandomWord = document.querySelector(".content_random_word");
const randomWord = document.querySelector(".random_word");

const selectLanguage = document.querySelector("#select_language");

const buttonMore = document.querySelector(".button_more");
const buttonPlay = document.querySelector(".button_play");
const buttonMoins = document.querySelector(".button_moins");
const buttonPlus = document.querySelector(".button_plus");
const buttonList = document.querySelector(".button_list");

const moreWordsCard = document.querySelector(".more_card_none");
const addWordsCard = document.querySelector(".add_words_card_none");
const RemoveWordsCard = document.querySelector(".remove_words_card_none");
const listWordsCard = document.querySelector(".list_words_card_none");

const buttonAdd = document.querySelector(".button_add");
const buttonOui = document.querySelector(".button_oui");
const buttonNon = document.querySelector(".button_non");

const arrayItems = [];
let theTwoLanguages = [];
const languageOne = [];
const languageTwo = [];
let usedLanguage = eval(selectLanguage.value);
let currentVocabulary = arrayItems;