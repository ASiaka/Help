console.log("Select.js");

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
// const clearWords = document.querySelector(".supp_words");
const listButton = document.querySelector(".list_words");
const listWords = document.querySelector(".list_none");
const RemoveWords = document.querySelector(".remove_none");
const buttonOui = document.querySelector(".remove_oui");
const buttonNon = document.querySelector(".remove_non");
const buttonRemove = document.querySelector(".supp_words");

let currentVocabulary = eval(category.value);