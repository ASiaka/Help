console.log("Script.js");

let App = {
  init: function() {
    Play.seeTheResponseButton();

    Add.handlePushItems();

    category.addEventListener('change', Play.handleChooseCurrentVocabulary);
    
    buttonPlay.addEventListener('click', Play.handlePlayWords);
    response.addEventListener('input', Play.handleValidation);
    response.addEventListener('change', Play.handleValidation);


    buttonList.addEventListener('click', List.handleWordsList);

    buttonPlus.addEventListener('click', () => {
      addWordsCard.classList.toggle("add_words_card");
      listWordsCard.classList.remove("list_words_card");
      RemoveWordsCard.classList.remove("remove_words_card");

      let addWordEn = document.querySelector("#add_word_en");
      let addWordFr = document.querySelector("#add_word_fr");

      if (addWordEn.value.trim() === "") {
        console.log("en empty");
        addWordEn.focus()
      } else if (addWordFr.value.trim() === "") {
          console.log("fr empty");
          addWordFr.focus()
        }
    });
    addWordsCard.addEventListener('submit', Add.handleAddWord);

    buttonMoins.addEventListener('click', () => {
      listWordsCard.classList.remove("list_words_card");
      addWordsCard.classList.remove("add_words_card");

      RemoveWordsCard.classList.toggle("remove_words_card");
    });
    buttonOui.addEventListener('click', () => {
      console.log('suppWord Ok');

      Remove.handleClearItems();
      // Add.handlePushItems();
      RemoveWordsCard.classList.remove("remove_words_card");
    });
    buttonNon.addEventListener('click', () => {
      RemoveWordsCard.classList.remove("remove_words_card");
    })
  },
}

document.addEventListener('DOMContentLoaded', App.init);