console.log("Remove.js");

const Remove = {
  handleRemoveItem: function(item) {
    localStorage.removeItem(item);
  },
  handleClearItems: function() {
    localStorage.clear();
  },

  handleClearWords: function () {
    console.log(arrayItems, arrayItems.length);
    arrayItems.splice(0);

    // console.log(arrayItems, arrayItems.length);
    // let words = document.querySelector(".words");
    // while (words.firstChild) {
    //   words.removeChild(words.firstChild);
    // }
  },

  handleRemoveWord: function () {
    // const nodeWord = document.querySelector(".words");
    const currentWord = document.querySelectorAll(".word");

    currentWord.forEach((index) => {
      let keyWord;
      index.addEventListener('click', (e) => {
        // console.log(e.currentTarget.id, index.id);

        keyWord = e.currentTarget.id;

        RemoveWordContent.classList.add("remove_word_content");

        buttonWordOui.addEventListener('click', () => {
          Remove.handleRemoveItem(keyWord);

          console.log(localStorage.length, keyWord, arrayItems);
          let wordDeleted = arrayItems.find((x) => {
            console.log(x.key, keyWord);
            return x.key === Number(keyWord);
          });

          if (wordDeleted !== undefined) {
            console.log(wordDeleted);
            let indexOfWordDeleted = arrayItems.indexOf(wordDeleted);
            console.log(indexOfWordDeleted);
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
          
          console.log(arrayItems, arrayItems.length);
          
          // Play.lang1(); Play.lang2(); Play.lang1and2();
          RemoveWordContent.classList.remove("remove_word_content");
        });

        buttonWordNon.addEventListener('click', () => {
          RemoveWordContent.classList.remove("remove_word_content");
        });
      });
    })
  },
}