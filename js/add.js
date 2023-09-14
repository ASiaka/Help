console.log("Add.js");

const Add = {
  handleSetItem: function(index, value) {
    localStorage.setItem(index, JSON.stringify(value));
  },

  handlePushItems: function() {
    for( let i = 0; i < arrayItems.length; i++){
      arrayItems.shift();
      // console.log(arrayItems, arrayItems.length);
    }
    for( let i = 0; i < localStorage.length; i++){
      arrayItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      // console.log(arrayItems, arrayItems.length);
    }

    // console.log(arrayItems, arrayItems.length);
  },

  handleOpenAddWordsCard: function () {
    addWordsCard.classList.toggle("add_words_card");
    listWordsCard.classList.remove("list_words_card");
    RemoveWordsCard.classList.remove("remove_words_card");
    moreWordsCard.classList.remove("more_card");
    infoCard.classList.remove("info_card");
    RemoveVocabularyCard.classList.remove("remove_vocabulary_card");

    let addWordLang1 = document.querySelector("#add_word_lang1");
    let addWordLang2 = document.querySelector("#add_word_lang2");

    if (addWordLang1.value.trim() === "") {
      addWordLang1.focus()
    } else if (addWordLang2.value.trim() === "") {
        addWordLang2.focus()
      }
  },

  handleAddWord: function (e) {
    e.preventDefault();
    console.log("submit Ok");

    let addWordLang1 = document.querySelector("#add_word_lang1");
    let addWordLang2 = document.querySelector("#add_word_lang2");

    // function keyword() {
    //   let maxKey = [];
    //   let newKey;
    //   for( let i = 0; i < localStorage.length; i++){
    //     console.log(localStorage.key(i), localStorage.length+1);
    //     newKey = localStorage.length+1
    //     if (localStorage.key(i) === localStorage.length+1) {
    //       maxKey.push(localStorage.key(i))
    //       newKey = Math.max(...maxKey);
    //     }
    //   }
    //   console.log(maxKey, Math.max(...maxKey));

    //   return newKey;
    // }
    // keyword();
    // console.log(keyword());

    if (addWordLang1.value.trim() !== "" && addWordLang2.value.trim() !== "") {
      const objectItems = {lang1: addWordLang1.value, lang2: addWordLang2.value, key: localStorage.length+1}
      Add.handleSetItem(localStorage.length+1, objectItems);
      addWordLang1.value = "";
      addWordLang2.value = "";
      addWordLang1.focus();

      Add.handlePushItems();
    } else {
      if (addWordLang1.value.trim() === "") {
        addWordLang1.focus()
      }
      if (addWordLang2.value.trim() === "") {
        addWordLang2.focus()
      }
      if (addWordLang1.value.trim() === "" & addWordLang2.value.trim() === "") {
        addWordLang1.focus()
      }
    }
  }
}