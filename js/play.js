console.log("Play.js");

const Play = {
  handleChooseLangToUse: function () {
    Play.lang1();
    Play.lang2();
    Play.lang1and2();
    usedLanguage = eval(selectLanguage.value);
    Play.handlePlayWords();
  },
  
  lang1: function () {
    currentVocabulary.map(i => languageOne.push(i.lang1.toLowerCase()));
    return languageOne
  },

  lang2: function () {
    currentVocabulary.map(i => languageTwo.push(i.lang2.toLowerCase()));
    return languageTwo
  },

  lang1and2: function () {
    currentVocabulary.map(i => theTwoLanguages.push(i.lang1.toLowerCase(), i.lang2.toLowerCase()));
    return theTwoLanguages
  },

  handlePlayWords: function () {
    if (currentVocabulary.length > 2) {
      listWordsCard.classList.remove("list_words_card");
      addWordsCard.classList.remove("add_words_card");
      RemoveWordsCard.classList.remove("remove_words_card");
      moreWordsCard.classList.remove("more_card");
      infoCard.classList.remove("info_card");
  
      let wordIndex = Math.round(Math.random() * (usedLanguage.length - 1));
      randomWord.classList.add("random_word_style");
      randomWord.textContent = usedLanguage[wordIndex];
      response.disabled = false;
      response.value = "";
      response.focus();
  
      const eyesButton = document.querySelector(".span_button_none");
      eyesButton.classList.add("span_button");
  
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
    function currentLang() {
      if (word.textContent === Play.wordFind().lang1) {
        return "en"
      }
      if (word.textContent === Play.wordFind().lang2) {
        return "fr"
      }
    };

    let text = word.textContent;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = (usedLanguage === languageOne) ? "en" :
                  (usedLanguage === languageTwo) ? "fr" : 
                  (usedLanguage === theTwoLanguages && word.textContent === Play.wordFind().lang1) ? "en" :
                  (usedLanguage === theTwoLanguages && word.textContent === Play.wordFind().lang2) && "fr";
    speechSynthesis.speak(speech);

    console.log(Play.wordFind());
  }

}