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

const changeLanguagesCard = document.querySelector(".change_languages_card_none");
const moreWordsCard = document.querySelector(".more_card_none");
const addWordsCard = document.querySelector(".add_words_card_none");
const RemoveVocabularyCard = document.querySelector(".remove_vocabulary_card_none");
const RemoveWordsCard = document.querySelector(".remove_words_card_none");
const RemoveWordContent = document.querySelector(".remove_word_content_none");
const RemoveWordCard = document.querySelector(".remove_word_card_none");
const listWordsCard = document.querySelector(".list_words_card_none");
const infoCard = document.querySelector(".info_card_none");

const buttonChangeLangOk = document.querySelector(".button_change_lang_ok");
const buttonAdd = document.querySelector(".button_add");
const buttonTout = document.querySelector(".button_tout");
const buttonUn = document.querySelector(".button_un");
const buttonOui = document.querySelector(".button_oui");
const buttonNon = document.querySelector(".button_non");
const buttonWordOui = document.querySelector(".button_word_oui");
const buttonWordNon = document.querySelector(".button_word_non");

const aPropos = document.querySelector(".a_propos");
const modeDemploi = document.querySelector(".mode_d-emploi");
const suggestions = document.querySelector(".suggestions");
const contact = document.querySelector(".contact");
const langues = document.querySelector(".langues");
const languesChoisies = document.querySelector(".langues_choisies");
const closeInfoCard = document.querySelector(".close_info_card");

const arrayItems = [];
let theTwoLanguages = [];
const languageOne = [];
const languageTwo = [];
let usedLanguage = eval(selectLanguage.value);
let currentVocabulary = arrayItems;