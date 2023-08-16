console.log("Script.js");

let App = {
  init: function() {
    Play.seeTheResponseButton();

    category.addEventListener('change', Play.handleChooseCurrentVocabulary);
    buttonPlay.addEventListener('click', Play.handlePlayWords);
    response.addEventListener('input', Play.handleValidation);

    buttonPlus.addEventListener('click', () => {
      console.log('addWord Ok');

      listWordsCard.classList.remove("list_words_card");
      addWordsCard.classList.toggle("add_words_card");
      RemoveWordsCard.classList.remove("remove_words_card");

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

    addWordsCard.addEventListener('submit', Add.handleAddWord);
    Add.handlePushItems();

    buttonOui.addEventListener('click', () => {
      console.log('suppWord Ok');

      Remove.handleClearItems();
      RemoveWordsCard.classList.remove("remove_words_card");
    });

    console.log(arrayItems);

    buttonList.addEventListener('click', List.handleWordsList);

    buttonMoins.addEventListener('click', () => {
      listWordsCard.classList.remove("list_words_card");
      addWordsCard.classList.remove("add_words_card");

      RemoveWordsCard.classList.toggle("remove_words_card");
    });

    buttonNon.addEventListener('click', () => {
      RemoveWordsCard.classList.remove("remove_words_card");
    })
  },
}

document.addEventListener('DOMContentLoaded', App.init);