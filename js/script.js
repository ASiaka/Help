console.log("Script.js");

let App = {
  init: function() {
    Play.seeTheResponseButton();
    Play.onMute();

    Add.handlePushItems();
    
    response.disabled = true;

    console.log(localStorage.length);
    if (localStorage.length === 0) {
      moreWordsCard.classList.remove("more_card");
      infoCard.classList.add("info_card");
    }
    More.handleLanguesContent(Langs.handleCurrentLangs());
    const choiseOfLanguages = document.querySelector(".choise_of_languages");
    languesChoisies.textContent = choiseOfLanguages.value;
    choiseOfLanguages.addEventListener('change', () => {
      languesChoisies.textContent = choiseOfLanguages.value;
    })

    // Select lang
    Langs.handleShowCurrentLangs("langOne", "langTwo", "langOneTwo");
    choiseOfLanguages.addEventListener('change', () => Langs.handleShowCurrentLangs("langOne", "langTwo", "langOneTwo"));

    // Play.lang1(); Play.lang2(); Play.lang1and2();
    selectLanguage.addEventListener('change', Play.handleChooseLangToUse);
    
    buttonPlay.addEventListener('click', Play.handlePlayWords);
    response.addEventListener('input', Play.handleValidation);
    response.addEventListener('change', Play.handleValidation);
    formResponse.addEventListener('submit', Play.handleValidation);


    buttonList.addEventListener('click', () => {
      List.handleWordsList();
      List.handleSpeechWordList();
    });

    buttonPlus.addEventListener('click', Add.handleOpenAddWordsCard);
    addWordsCard.addEventListener('submit', Add.handleAddWord);

    buttonMoins.addEventListener('click', () => {
      listWordsCard.classList.remove("list_words_card");
      addWordsCard.classList.remove("add_words_card");
      moreWordsCard.classList.remove("more_card");
      changeLanguagesCard.classList.remove("change_languages_card");
      infoCard.classList.remove("info_card");
      RemoveWordsCard.classList.remove("remove_words_card");

      RemoveVocabularyCard.classList.toggle("remove_vocabulary_card");
    });
    buttonTout.addEventListener('click', () => {
      RemoveVocabularyCard.classList.remove("remove_vocabulary_card");

      RemoveWordsCard.classList.add("remove_words_card");
    });
    buttonUn.addEventListener('click', () => {
      RemoveVocabularyCard.classList.remove("remove_vocabulary_card");
      List.handleWordsList();
      Remove.handleRemoveWord();
      
      listWordsCard.style.border = "red solid 1px";
    });
    
    buttonOui.addEventListener('click', () => {
      console.log('suppWords Ok');

      Remove.handleClearItems();

      Remove.handleClearWords();
      
      Add.handlePushItems();
      RemoveWordsCard.classList.remove("remove_words_card");
    });
    buttonNon.addEventListener('click', () => {
      RemoveWordsCard.classList.remove("remove_words_card");
    });

    buttonMore.addEventListener('click', () => {
      listWordsCard.classList.remove("list_words_card");
      addWordsCard.classList.remove("add_words_card");
      changeLanguagesCard.classList.remove("change_languages_card");
      RemoveWordsCard.classList.remove("remove_words_card");
      RemoveVocabularyCard.classList.remove("remove_vocabulary_card");

      moreWordsCard.classList.toggle("more_card");
    });

    aPropos.addEventListener('click', () => {
      moreWordsCard.classList.remove("more_card");
      infoCard.classList.add("info_card");

      More.handleCurrentContent("a_propos", "A propos", "RevisionHelp est une application qui vous aide à réviser votre vocabulaire lorsque vous apprenez une langue.");
    });
    modeDemploi.addEventListener('click', () => {
      moreWordsCard.classList.remove("more_card");
      infoCard.classList.add("info_card");

      More.handleCurrentContent("mode_d-emploi", "Mode d'emploi", "List : Liste de vocabulaire%Add : Ajout de vocabulaire%Delete : Suppréssion de tout le vocabulaire%Play : Propose aléatoirement un mot du vocabulaire et à vous d'écrire sa traduction%Select : Sélection de la langue à proposer aléatoirement%(?) : Voir la traduction");
    });
    suggestions.addEventListener('click', () => {
      moreWordsCard.classList.remove("more_card");
      infoCard.classList.add("info_card");

      More.handleCurrentContent("suggestions", "Suggestions", "Vous pouvez nous faire part de vos suggestions via notre site :%https://asiakadev.com");
    });
    contact.addEventListener('click', () => {
      moreWordsCard.classList.remove("more_card");
      infoCard.classList.add("info_card");

      More.handleCurrentContent("contact", "Contact", "Vous pouvez nous contacter via notre site :%https://asiakadev.com");
    });
    langues.addEventListener('click', () => {
      moreWordsCard.classList.remove("more_card");
      
      if (localStorage.length > 0) {
        infoCard.classList.remove("info_card");
        changeLanguagesCard.classList.add("change_languages_card");
      } else {
        infoCard.classList.add("info_card");
        changeLanguagesCard.classList.remove("change_languages_card");

        More.handleLanguesContent(Langs.handleCurrentLangs());
        
        const choiseOfLanguages = document.querySelector(".choise_of_languages");
        choiseOfLanguages.addEventListener('change', () => {
          languesChoisies.textContent = choiseOfLanguages.value;
        });

        // Select lang
        Langs.handleShowCurrentLangs("langOne", "langTwo", "langOneTwo");
        choiseOfLanguages.addEventListener('change', () => Langs.handleShowCurrentLangs("langOne", "langTwo", "langOneTwo"));
      }

    });
    buttonChangeLangOk.addEventListener('click', () => {
      infoCard.classList.add("info_card");
      changeLanguagesCard.classList.remove("change_languages_card");

      More.handleLanguesContent(Langs.handleCurrentLangs());

      const choiseOfLanguages = document.querySelector(".choise_of_languages");
      choiseOfLanguages.addEventListener('change', () => {
        console.log('suppWords Ok');
        languesChoisies.textContent = choiseOfLanguages.value;

        Remove.handleClearItems();
  
        Remove.handleClearWords();
        
        Add.handlePushItems();
        RemoveWordsCard.classList.remove("remove_words_card");
      })

      // Select lang
      Langs.handleShowCurrentLangs("langOne", "langTwo", "langOneTwo");
      choiseOfLanguages.addEventListener('change', () => Langs.handleShowCurrentLangs("langOne", "langTwo", "langOneTwo"));
      // console.log(choiseOfLanguages.value);
    });
    closeInfoCard.addEventListener('click', () => {
      infoCard.classList.remove("info_card");
    });

    randomWord.addEventListener('click', () => Play.handleSpeechWord(randomWord));
  }
}

document.addEventListener('DOMContentLoaded', App.init);