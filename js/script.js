console.log("Script.js");

let App = {
  init: function() {
    Play.seeTheResponseButton();

    Add.handlePushItems();

    console.log(currentVocabulary, Play.en(), Play.fr(), Play.enAndFr());

    selectLanguage.addEventListener('change', Play.handleChooseLangToUse);
    
    buttonPlay.addEventListener('click', Play.handlePlayWords);
    response.addEventListener('input', Play.handleValidation);
    response.addEventListener('change', Play.handleValidation);
    formResponse.addEventListener('submit', Play.handleValidation);


    buttonList.addEventListener('click', List.handleWordsList);

    buttonPlus.addEventListener('click', Add.handleOpenAddWordsCard);
    addWordsCard.addEventListener('submit', Add.handleAddWord);

    buttonMoins.addEventListener('click', () => {
      listWordsCard.classList.remove("list_words_card");
      addWordsCard.classList.remove("add_words_card");
      moreWordsCard.classList.remove("more_card");
      infoCard.classList.remove("info_card");

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
    });

    buttonMore.addEventListener('click', () => {
      listWordsCard.classList.remove("list_words_card");
      addWordsCard.classList.remove("add_words_card");
      RemoveWordsCard.classList.remove("remove_words_card");

      moreWordsCard.classList.toggle("more_card");
    });

    aPropos.addEventListener('click', () => {
      moreWordsCard.classList.remove("more_card");
      infoCard.classList.add("info_card");
    });
    modeDemploi.addEventListener('click', () => {
      moreWordsCard.classList.remove("more_card");
      infoCard.classList.add("info_card");
    });
    suggestions.addEventListener('click', () => {
      moreWordsCard.classList.remove("more_card");
      infoCard.classList.add("info_card");
    });
    contact.addEventListener('click', () => {
      moreWordsCard.classList.remove("more_card");
      infoCard.classList.add("info_card");
    });
    closeInfoCard.addEventListener('click', () => {
      infoCard.classList.remove("info_card");
    });
  },
}

document.addEventListener('DOMContentLoaded', App.init);