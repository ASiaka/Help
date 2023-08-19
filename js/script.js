console.log("Script.js");

let App = {
  init: function() {
    Play.seeTheResponseButton();

    Add.handlePushItems();

    response.disabled = true;

    Play.lang1(); Play.lang2(); Play.lang1and2();
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
      console.log('suppWords Ok');

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

      More.handleCurrentContent("a_propos", "A propos", "RevisionHelp est une application qui vous aide à révisez votre vocabulaire lorsque vous apprenez une langue.");
    });
    modeDemploi.addEventListener('click', () => {
      moreWordsCard.classList.remove("more_card");
      infoCard.classList.add("info_card");

      More.handleCurrentContent("mode_d-emploi", "Mode d'emploi", "[= List] : Liste de vocabulaire [+ Add] : Ajout de vocabulaire [- Delete] : Suppréssion de tout le vocabulaire [> Play] : Propose aléatoirement un mot du vocabulaire et à vous d'écrire sa traduction.");
    });
    suggestions.addEventListener('click', () => {
      moreWordsCard.classList.remove("more_card");
      infoCard.classList.add("info_card");

      More.handleCurrentContent("suggestions", "Suggestions", "Vous pouvez nous faire part de vos suggestions via notre site : https://asiakadev.com");
    });
    contact.addEventListener('click', () => {
      moreWordsCard.classList.remove("more_card");
      infoCard.classList.add("info_card");

      More.handleCurrentContent("contact", "Contact", "Vous pouvez nous contacter via notre site : https://asiakadev.com");
    });
    closeInfoCard.addEventListener('click', () => {
      infoCard.classList.remove("info_card");
    });
  },
}

document.addEventListener('DOMContentLoaded', App.init);