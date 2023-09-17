console.log("List.js");

const List = {
  wordsList: function (lang1, lang2, key, backgroundGray) {
    let words = document.querySelector(".words");
    let word = document.createElement('div');
    word.classList.add("word", backgroundGray);
    word.id = key;
    let listLang1 = document.createElement('p');
    let listLang2 = document.createElement('p');
    listLang1.textContent = lang1;
    listLang1.classList.add("L1");
    listLang2.textContent = lang2;
    listLang2.classList.add("L2");

    word.append(listLang1, listLang2);
    words.append(word);
  },

  handleWordsList: function () {
    let words = document.querySelector(".words");
    while (words.firstChild) {
      words.removeChild(words.firstChild);
    }

    addWordsCard.classList.remove("add_words_card");
    listWordsCard.classList.toggle("list_words_card");
    RemoveWordsCard.classList.remove("remove_words_card");
    moreWordsCard.classList.remove("more_card");
    infoCard.classList.remove("info_card");
    RemoveVocabularyCard.classList.remove("remove_vocabulary_card");
    
    for (let index = 0; index < arrayItems.length; index++) {
      let backgroundGray = "backgroung_white";
      if (index % 2) {
        backgroundGray = "background_gray"
      }
      List.wordsList(arrayItems[index].lang1, arrayItems[index].lang2, arrayItems[index].key, backgroundGray);
    }

    listWordsCard.style.border = "none";

    // speechWordList
    // const currentWords = document.querySelectorAll(".word p");

    // currentWords.forEach((index) => {
    //   index.addEventListener('click', (e) => {
    //     console.log(e.target.textContent, e.target.className);
    //     List.handleSpeechWordList(e.target.textContent, e.target.className);
    //   })
    // });
  },

  handleSpeechWordList: function () {
    const currentWords = document.querySelectorAll(".word p");

    currentWords.forEach((index) => {
      index.addEventListener('click', (e) => {
        console.log(e.target.textContent, e.target.className);
        speech(e.target.textContent, e.target.className);
      })
    });

    function speech(word, lang) {
      function currentLang() {
        if (lang === "L1") {
          return "en-US"
        }
        if (lang === "L2") {
          return "fr-FR"
        }
      };
      
      let text = word;
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = currentLang();
      speechSynthesis.cancel(speech);
      speechSynthesis.speak(speech);    
    }
  }
}