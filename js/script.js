console.log("Script.js");

let App = {
  init: function() {
    Play.seeTheResponseButton();

    category.addEventListener('change', Play.handleChooseCurrentVocabulary);
    button.addEventListener('click', Play.handlePlayWords);
    response.addEventListener('input', Play.handleValidation);

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
    addForm.addEventListener('submit', Add.handleAddWord);
    Add.handlePushItems();
    clearWords.addEventListener('click', () => {
      console.log('suppWord Ok');

      listWords.classList.remove("list");
      addForm.classList.remove("add_form");

      Remove.handleClearItems();
    });
    console.log(arrayItems);
    listButton.addEventListener('click', List.handleWordsList)
  },
}

document.addEventListener('DOMContentLoaded', App.init);