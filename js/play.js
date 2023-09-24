console.log("Play.js");

const Play = {
  handleChooseLangToUse: function () {
    // Play.lang1();
    // Play.lang2();
    // Play.lang1and2();
    usedLanguage = eval(selectLanguage.value);
    // console.log(usedLanguage);
    Play.handlePlayWords();
  },
  
  lang1: function () {
    languageOne.splice(0);
    currentVocabulary.map(i => languageOne.push(i.lang1.toLowerCase()));
    // console.log(languageOne);
    return languageOne
  },

  lang2: function () {
    languageTwo.splice(0);
    currentVocabulary.map(i => languageTwo.push(i.lang2.toLowerCase()));
    // console.log(languageTwo);
    return languageTwo
  },

  lang1and2: function () {
    theTwoLanguages.splice(0);
    currentVocabulary.map(i => theTwoLanguages.push(i.lang1.toLowerCase(), i.lang2.toLowerCase()));
    // console.log(theTwoLanguages);
    return theTwoLanguages
  },

  handlePlayWords: function () {
    // console.log(usedLanguage, currentVocabulary, arrayItems);

    if (currentVocabulary.length > 2) {
      listWordsCard.classList.remove("list_words_card");
      addWordsCard.classList.remove("add_words_card");
      RemoveWordsCard.classList.remove("remove_words_card");
      moreWordsCard.classList.remove("more_card");
      changeLanguagesCard.classList.remove("change_languages_card");
      infoCard.classList.remove("info_card");
      RemoveVocabularyCard.classList.remove("remove_vocabulary_card");
  
      let wordIndex = Math.round(Math.random() * (usedLanguage.length - 1));
      randomWord.classList.add("random_word_style");
      randomWord.textContent = usedLanguage[wordIndex];
      response.disabled = false;
      response.value = "";
      response.focus();
  
      const eyesButton = document.querySelector(".span_button_none");
      eyesButton.classList.add("span_button");

      const onMute = document.querySelector(".on_mute_none");
      onMute.classList.add("on_mute");
  
      Play.seeTheResponse();

      Play.handleSpeechWord(randomWord);
    } else {
        alert("Vous devez ajouter 3 vocabulaires minimum");
        Add.handleOpenAddWordsCard();
      }
  },

  wordFind: function() {
    const find = currentVocabulary.find(i => {
      return (i.lang2.toLowerCase() === randomWord.textContent.toLowerCase() ||
              i.lang1.toLowerCase() === randomWord.textContent.toLowerCase())
    });
    
    return find
  },

  onMute: function () {
    let onMute = document.createElement('i');
    onMute.className = "fa-solid fa-volume-high on_mute_none";
    contentRandomWord.append(onMute);

    // console.log(onMute.className);

    onMute.addEventListener('click', () => {
      if (onMute.className === "fa-solid fa-volume-high on_mute_none on_mute") {
        onMute.classList.replace("fa-volume-high", "fa-volume-xmark");
        // console.log("mute");
        return
      }
      if (onMute.className === "fa-solid fa-volume-xmark on_mute_none on_mute") {
        onMute.classList.replace("fa-volume-xmark", "fa-volume-high");
        // console.log("sound");
        return
      }
    })
  },

  seeTheResponseButton: function () {
    let spanButton = document.createElement('button');
    spanButton.textContent = "?";
    spanButton.className = "span_button_none";
    contentRandomWord.append(spanButton);

    let spanResponse = document.createElement('span');
    spanResponse.className = "span_response_none";
    contentRandomWord.append(spanResponse);

    spanButton.addEventListener('click', () => {
      spanResponse.classList.toggle("span_response");
    })
  },

  seeTheResponse: function() {
    let spanResponse = document.querySelector('.span_response_none');

    if (randomWord.textContent.toLowerCase() === Play.wordFind().lang1.toLowerCase()) {
      spanResponse.textContent = Play.wordFind().lang2;
    } else if (randomWord.textContent.toLowerCase() === Play.wordFind().lang2.toLowerCase()) {
        spanResponse.textContent = Play.wordFind().lang1;
      } else {
          spanResponse.textContent = "";
        }
  },

  handleValidation: function(e) {
    e.preventDefault();
    
    if (randomWord.textContent.toLowerCase() === Play.wordFind().lang1.toLowerCase() && response.value.toLowerCase() === Play.wordFind().lang2.toLowerCase()) {
      successWord.classList.add("success");
      failedWord.classList.remove("failed");

      goodResponse.textContent = Play.wordFind().lang2;
      response.value = "";

      setTimeout(() => {
        Play.handlePlayWords();
        successWord.classList.remove("success");
        goodResponse.textContent = "";
      }, 1500);

    } else if (randomWord.textContent.toLowerCase() === Play.wordFind().lang2.toLowerCase() && response.value.toLowerCase() === Play.wordFind().lang1.toLowerCase()) {
        successWord.classList.add("success");
        failedWord.classList.remove("failed");

        goodResponse.textContent = Play.wordFind().lang1;
        response.value = "";

        setTimeout(() => {
          Play.handlePlayWords();
          successWord.classList.remove("success");
          goodResponse.textContent = "";
        }, 1500);

      } else {
          successWord.classList.remove("success");
          failedWord.classList.add("failed");
        }
  },

  handleSpeechWord: function (word) {
    let voices;
    speechSynthesis.onvoiceschanged = function () {
      voices = window.speechSynthesis.getVoices();
      console.log(voices);  
    }

    function currentLang() {
      console.log(languesChoisies.textContent);
      if (languesChoisies.textContent === "EN / FR") {
        if ((usedLanguage === theTwoLanguages && word.textContent === Play.wordFind().lang1) || (usedLanguage === languageOne)) {
          return "en-US"
        }
        if ((usedLanguage === theTwoLanguages && word.textContent === Play.wordFind().lang2) || (usedLanguage === languageTwo)) {
          return "fr-FR"
        }  
      }
      if (languesChoisies.textContent === "ES / IT") {
        if ((usedLanguage === theTwoLanguages && word.textContent === Play.wordFind().lang1) || (usedLanguage === languageOne)) {
          return "es-ES"
        }
        if ((usedLanguage === theTwoLanguages && word.textContent === Play.wordFind().lang2) || (usedLanguage === languageTwo)) {
          return "it-IT"
        }  
      }
    };

    function mute() {
      const onMute = document.querySelector(".on_mute");
      if (onMute.className === "fa-solid fa-volume-high on_mute_none on_mute") {
        speechSynthesis.speak(speech);
        return
      }
      if (onMute.className === "fa-solid fa-volume-xmark on_mute_none on_mute") {
        speechSynthesis.cancel(speech);
        return
      }
    };

    let text = word.textContent;
    const speech = new SpeechSynthesisUtterance(text);
    console.log(currentLang());
    speech.lang = currentLang();
    speechSynthesis.cancel(speech);
    mute();

    // console.log(Play.wordFind(), currentLang());
  }

}