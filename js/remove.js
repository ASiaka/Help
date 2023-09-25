console.log("Remove.js");

const Remove = {
  handleRemoveItem: function(item) {
    localStorage.removeItem(item);
  },
  handleClearItems: function() {
    localStorage.clear();
  },

  handleClearWords: function () {
    // console.log(arrayItems, arrayItems.length);

    // Remove.handleClearItems();
    arrayItems.splice(0);

    // selectLanguage.value = "theTwoLanguages";
    selectLanguage.value = "languageOne";

    successWord.classList.remove("success");
    failedWord.classList.remove("failed");

    randomWord.classList.remove("random_word_style");
    randomWord.textContent = "";
    response.value = "";
    response.disabled = true;

    const eyesButton = document.querySelector(".span_button_none");
    eyesButton.classList.remove("span_button");

    const onMute = document.querySelector(".on_mute_none");
    onMute.classList.remove("on_mute");
  },

  handleRemoveWord: function () {
    const currentWord = document.querySelectorAll(".word");

    currentWord.forEach((index) => {
      let keyWord;
      index.addEventListener('click', (e) => {
        // console.log(e.currentTarget.id, index.id);

        keyWord = e.currentTarget.id;

        RemoveWordContent.classList.add("remove_word_content");

        let wordDeleted = arrayItems.find((x) => {
          // console.log(x.key, keyWord);
          return x.key === Number(keyWord);
        });

        const wordToDelete = document.querySelector(".word_to_delete");
        wordToDelete.textContent = wordDeleted.lang1 + " / " + wordDeleted.lang2;

        buttonWordOui.addEventListener('click', () => {
          Remove.handleRemoveItem(keyWord);

          // console.log(localStorage.length, keyWord, arrayItems);
          let wordDeleted = arrayItems.find((x) => {
            // console.log(x.key, keyWord);
            return x.key === Number(keyWord);
          });

          if (wordDeleted !== undefined) {
            // console.log(wordDeleted);
            let indexOfWordDeleted = arrayItems.indexOf(wordDeleted);
            // console.log(indexOfWordDeleted);
            arrayItems.splice(indexOfWordDeleted, 1);
  
            let words = document.querySelector(".words");
            while (words.firstChild) {
              words.removeChild(words.firstChild);
            }
            for (let index = 0; index < arrayItems.length; index++) {
              let backgroundGray = "backgroung_white";
              if (index % 2) {
                backgroundGray = "background_gray"
              }
              List.wordsList(arrayItems[index].lang1, arrayItems[index].lang2, arrayItems[index].key, backgroundGray);
            }
          }
          
          // console.log(arrayItems, currentVocabulary, usedLanguage);
          
          usedLanguage.splice(0);
          Play.lang1(); Play.lang2(); Play.lang1and2();
          // Play.handleChooseLangToUse();

          RemoveWordContent.classList.remove("remove_word_content");

          Remove.handleRemoveWord();
        });

        buttonWordNon.addEventListener('click', () => {
          RemoveWordContent.classList.remove("remove_word_content");
        });
      });
    })
  },
}