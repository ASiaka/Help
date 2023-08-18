console.log("Play.js");

const Play = {
  handleChooseLangToUse: function () {
    Play.en();
    Play.fr();
    Play.wordFind();
    usedLanguage = eval(selectLanguage.value);
    Play.handlePlayWords();
    console.log(usedLanguage);
  },
  
  en: function () {
    currentVocabulary.map(i => languageOne.push(i.en.toLowerCase()));
    return languageOne
  },

  fr: function () {
    currentVocabulary.map(i => languageTwo.push(i.fr.toLowerCase()));
    return languageTwo
  },

  enAndFr: function () {
    currentVocabulary.map(i => theTwoLanguages.push(i.en.toLowerCase(), i.fr.toLowerCase()));
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
      response.value = "";
      response.focus();
  
      const eyesButton = document.querySelector(".span_button_none");
      eyesButton.classList.add("span_button");
  
      Play.seeTheResponse();
    } else {
        alert("Vous devez ajouter 3 vocabulaires minimum");
        Add.handleOpenAddWordsCard();
      }
  },

  wordFind: function() {
    const find = currentVocabulary.find(i => {
      return (i.fr.toLowerCase() === randomWord.textContent.toLowerCase() ||
              i.en.toLowerCase() === randomWord.textContent.toLowerCase())
    });
    console.log(find);
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

    console.log(Play.wordFind());
    let spanResponse = document.querySelector('.span_response_none');

    if (randomWord.textContent.toLowerCase() === Play.wordFind().en.toLowerCase()) {
      spanResponse.textContent = Play.wordFind().fr;
    } else if (randomWord.textContent.toLowerCase() === Play.wordFind().fr.toLowerCase()) {
        spanResponse.textContent = Play.wordFind().en;
      } else {
          spanResponse.textContent = "";
        }
  },

  handleValidation: function(e) {
    e.preventDefault();
    
    if (randomWord.textContent.toLowerCase() === Play.wordFind().en.toLowerCase() && response.value.toLowerCase() === Play.wordFind().fr.toLowerCase()) {
      successWord.classList.add("success");
      failedWord.classList.remove("failed");

      goodResponse.textContent = Play.wordFind().fr;
      response.value = "";

      setTimeout(() => {
        Play.handlePlayWords();
        successWord.classList.remove("success");
        goodResponse.textContent = "";
      }, 1500);

    } else if (randomWord.textContent.toLowerCase() === Play.wordFind().fr.toLowerCase() && response.value.toLowerCase() === Play.wordFind().en.toLowerCase()) {
        successWord.classList.add("success");
        failedWord.classList.remove("failed");

        goodResponse.textContent = Play.wordFind().en;
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

}